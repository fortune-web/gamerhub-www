import React, { useEffect, useState, useMemo, Children } from 'react';
import { useWallet } from '@binance-chain/bsc-use-wallet';
import Web3 from 'web3';
import { provider } from 'web3-core';
import { useWalletModal } from '@pancakeswap-libs/uikit';
import Image from 'next/image';
import GHTLogo from '../../../shared/assets/img/logo_2.png';
import USDT from '../../../shared/assets/img/USDT.png';
import BUSD from '../../../shared/assets/img/busd.png';
import ArrowDown from '../../../shared/assets/icon/arrow_down.png';
import BUSDABI from '../../../lib/contracts/busd.json';
import USDTABI from '../../../lib/contracts/usdt.json';
import IDOABI from '../../../lib/contracts/ido.json';
import styles from './DepositDialog.module.scss';
import Dropdown from '../../../shared/assets/icon/dropdown.svg';
import { AbiItem } from 'web3-utils';

const CHAIN_ID = process.env.CHAINID || 56;
const busdAddress = BUSDABI.address[CHAIN_ID as keyof typeof BUSDABI.address];
const usdtAddress = USDTABI.address[CHAIN_ID as keyof typeof USDTABI.address];
const idoAddress = IDOABI.address[CHAIN_ID as keyof typeof IDOABI.address];

const enum PurchaseStatus {
  CONNECTED,
  DISCONNECTED,
  APPROVED,
  PURCHASED,
  PENDING,
}

export interface IDepositDialog {}

const Currencies = [
  { img: BUSD, label: 'BUSD', value: 'BUSD' },
  { img: USDT, label: 'USDT', value: 'USDT' },
];

const DepositDialog: React.FC<IDepositDialog> = () => {
  const { account, connect, reset, status, ethereum, chainId } = useWallet();
  const [busdAmount, setBusdAmount] = useState(0);
  const [usdtAmount, setUsdtAmount] = useState(0);
  const [ghtAmount, setGhtAmount] = useState(0);
  const [cashAmount, setCashAmount] = useState(0);
  const [selectedCash, setSelectedCash] = useState(Currencies[0]);
  const [visibleDropDown, setVisibleDropDown] = useState(false);
  const [purchaseStatus, setPurchaseStatus] = useState(
    PurchaseStatus.DISCONNECTED
  );
  const ght_price = 0.022;

  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    (data) => connect(data),
    () => reset(),
    account || ''
  );

  const busdContract = useMemo(() => {
    if (account && status === 'connected') {
      const web3 = new Web3(ethereum as provider);
      const _contract = new web3.eth.Contract(
        BUSDABI.abi as unknown as AbiItem,
        busdAddress
      );
      _contract.methods
        .balanceOf(account)
        .call()
        .then((res: string) =>
          setBusdAmount(parseFloat(Web3.utils.fromWei(res, 'ether')))
        );
      return _contract;
    }
    return null;
  }, [account, status, chainId]);

  const usdtContract = useMemo(() => {
    if (account && status === 'connected') {
      const web3 = new Web3(ethereum as provider);
      const _contract = new web3.eth.Contract(
        BUSDABI.abi as unknown as AbiItem,
        usdtAddress
      );
      _contract.methods
        .balanceOf(account)
        .call()
        .then((res: string) =>
          setUsdtAmount(parseFloat(Web3.utils.fromWei(res, 'ether')))
        );
      return _contract;
    }
    return null;
  }, [account, status, chainId]);

  const idoContract = useMemo(() => {
    if (account && status === 'connected') {
      const web3 = new Web3(ethereum as provider);
      const _contract = new web3.eth.Contract(
        IDOABI.abi as unknown as AbiItem,
        idoAddress
      );
      return _contract;
    }
    return null;
  }, [account, status, chainId]);

  useEffect(() => {
    status === 'connected'
      ? setPurchaseStatus(PurchaseStatus.CONNECTED)
      : setPurchaseStatus(PurchaseStatus.DISCONNECTED);
  }, [status, account, chainId]);

  const onChangeGhtAmount = (e: any) => {
    const _val = e.target.value;
    setGhtAmount(_val);
    setCashAmount(_val * ght_price);
  };

  const onChangeCashAmount = (e: any) => {
    const _val = e.target.value;
    setCashAmount(_val);
    setGhtAmount(_val / ght_price);
  };

  const setCashMax = () => {
    const _amount = selectedCash.value === 'BUSD' ? busdAmount : usdtAmount;
    setCashAmount(_amount);
    setGhtAmount(_amount / ght_price);
  };

  const approve = async () => {
    if (busdContract && usdtContract) {
      setPurchaseStatus(PurchaseStatus.PENDING);
      try {
        const _contract =
          selectedCash.value === 'BUSD' ? busdContract : usdtContract;
        const res = await _contract.methods
          .approve(idoAddress, Web3.utils.toWei(cashAmount.toString(), 'ether'))
          .send({ from: account });
        setPurchaseStatus(PurchaseStatus.APPROVED);
      } catch (err) {
        setPurchaseStatus(PurchaseStatus.CONNECTED);
      }
    }
  };

  const purchase = async () => {
    if (idoContract) {
      setPurchaseStatus(PurchaseStatus.PENDING);
      try {
        const _token =
          selectedCash.value === 'BUSD' ? busdAddress : usdtAddress;
        const res = await idoContract.methods
          .saveFund(_token, Web3.utils.toWei(cashAmount.toString(), 'ether'))
          .send({ from: account });
        setPurchaseStatus(PurchaseStatus.CONNECTED);
      } catch (err) {
        setPurchaseStatus(PurchaseStatus.CONNECTED);
      }
    }
  };

  return (
    <div className={styles.deposit_dialog}>
      <div className="relative">
        <button
          className="flex items-center"
          onClick={() => setVisibleDropDown(!visibleDropDown)}
        >
          <Image src={selectedCash.img} alt="logo" width={28} height={28} />
          <span className="body1 text-grey-m_4 mx-2">{selectedCash.label}</span>
          <Image src={Dropdown} alt="" />
        </button>
        {visibleDropDown && (
          <div className="absolute z-10 bg-grey-4 p-2 mt-2 w-fit rounded-md">
            {Currencies.map((currency) => (
              <button
                className="flex items-center my-2 pr-4 hover:bg-grey-m_1 rounded"
                onClick={() => {
                  setSelectedCash(currency);
                  setVisibleDropDown(false);
                }}
              >
                <Image src={currency.img} alt="logo" width={28} height={28} />
                <span className="body1 text-grey-m_4 ml-2">
                  {currency.label}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="relative">
        <input
          type="number"
          className={styles.input}
          value={cashAmount}
          onChange={onChangeCashAmount}
        />
        <button className={styles.btn_max} onClick={setCashMax}>
          Max
        </button>
      </div>

      <div className="flex justify-center">
        <Image src={ArrowDown} alt="logo" width={40} height={40} />
      </div>

      <div className="flex items-center">
        <Image src={GHTLogo} alt="logo" width={28} height={28} />
        <label className="body1 text-grey-m_4 ml-2">GHT</label>
      </div>
      <input
        type="number"
        className={styles.input}
        value={ghtAmount}
        onChange={onChangeGhtAmount}
      />

      <div className="flex justify-between body1 text-grey-m_3 mb-6 mt-2">
        Price: ${ght_price}
      </div>

      {purchaseStatus === PurchaseStatus.DISCONNECTED && (
        <button className="def-btn mb-10" onClick={onPresentConnectModal}>
          Connect Wallet
        </button>
      )}
      {purchaseStatus === PurchaseStatus.CONNECTED && (
        <button className="def-btn mb-10" onClick={approve}>
          Approve
        </button>
      )}
      {purchaseStatus === PurchaseStatus.APPROVED && (
        <button className="def-btn mb-10" onClick={purchase}>
          Purchase
        </button>
      )}
      {purchaseStatus === PurchaseStatus.PENDING && (
        <button className="def-btn mb-10" disabled>
          Pending
        </button>
      )}

      <div className="flex justify-between body1 text-grey-m_3 mb-4">
        <label>Minimum Allocation</label>
        <label>
          <strong>$50</strong>
        </label>
      </div>
      <div className="flex justify-between body1 text-grey-m_3">
        <label>Maximum Allocation</label>
        <label>
          <strong>$5,000</strong>
        </label>
      </div>
    </div>
  );
};

export default DepositDialog;
