import React, { useState } from 'react';
import Image from 'next/image';
import copy from '../../../shared/assets/icon/copy.png';
import upfill from '../../../shared/assets/icon/upfill.svg';
import { tabsData } from '../Gamerhub/Gamerhub';
import styles from './Wallet.module.scss';
import classNames from 'classnames';
import BNB from '../../../shared/assets/icon/BNB.png';
import ETH from '../../../shared/assets/icon/ETH.png';
import usdc from '../../../shared/assets/icon/usdc.png';
import FTM from '../../../shared/assets/icon/FTM.png';
import bitcoin from '../../../shared/assets/icon/bitcoin.png';
import GHT from '../../../shared/assets/icon/GHT.png';

interface IAsset {
  icon: any;
  name: string;
  type: string;
  price: number;
  rate: number;
  balance: number;
  cost: number;
}
const Assets: IAsset[] = [
  {
    icon: GHT,
    name: 'GHT',
    type: 'ERC20',
    price: 0.2,
    rate: 10.3,
    balance: 950.3,
    cost: 0.03,
  },
  {
    icon: bitcoin,
    name: 'BTC',
    type: 'ERC20',
    price: 31700,
    rate: 2.1,
    balance: 950.3,
    cost: 0.03,
  },
  {
    icon: ETH,
    name: 'ETH',
    type: 'ERC20',
    price: 1970,
    rate: 4.7,
    balance: 989.1,
    cost: 0.5,
  },
  {
    icon: BNB,
    name: 'BNB',
    type: 'BEP20',
    price: 319.2,
    rate: 4.1,
    balance: 120.4,
    cost: 0.375,
  },
  {
    icon: FTM,
    name: 'FTM',
    type: '',
    price: 360,
    rate: 49,
    balance: 360,
    cost: 874,
  },
  {
    icon: usdc,
    name: 'USDC',
    type: '',
    price: 1.01,
    rate: 0.1,
    balance: 1000.3,
    cost: 1000,
  },
];

const Wallet: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="mt-10">
      <div className={styles.wallet_card}>
        <h1 className="body2 font-normal text-grey-m_2 mt-8">
          Total Wallet Balance
        </h1>
        <h1 className="header3 text-grey-m_4 mt-1">$3,500.80</h1>
        <div className="flex gap-1 items-center mt-2">
          <h1 className="body2 font-normal text-grey-m_2 ">0xb80f...29bb</h1>
          <button>
            <Image src={copy} className={styles.copy} />
          </button>
        </div>
        <div className="flex items-center mt-3.5">
          <h1 className="body2 font-normal text-green-g_1 mr-1.5">+$38</h1>
          <button>
            <Image src={upfill} className={styles.upfill} />
          </button>
          <h1 className="body2 font-normal text-green-g_1 ml-0.5">3%</h1>
        </div>
      </div>

      <div className="my-10 text-grey-m_4">ASSETS</div>
      <div className="grid grid-cols-7 gap-10">
        <div className="col-span-4 grid grid-cols-1 divide-y divide-solid border-solid border-1 rounded-lg border-grey-2">
          {Assets.map((asset) => (
            <div className="flex px-4 py-3">
              <div>
                <Image src={asset.icon} width={40} height={40} />
              </div>
              <div className="flex justify-between w-full space-x-2 m-2">
                <div className="flex flex-col space-y-2">
                  <div className="space-x-2">
                    <span className="body1 text-grey-m_4">{asset.name}</span>
                    <span className="caption1 text-grey-main">
                      {asset.type}
                    </span>
                  </div>
                  <div className="space-x-2">
                    <span className="caption2 text-grey-m_2">{`$${asset.price}`}</span>
                    <span className="caption2 text-green-1">{`${asset.rate}%`}</span>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 items-end">
                  <span className="body1 text-grey-m_4">{`$${asset.balance}`}</span>
                  <span className="body2 text-grey-m_2">{`${asset.cost}`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-3 flex flex-col items-center">
          <label className="body2 text-grey-m_2">Transaction history</label>
          <div className="flex items-center my-2">
            <Image src={ETH} width={30} height={30} />
            <label className="body1 text-grey-m_3 ml-2">{`ETH (ERC20)`}</label>
          </div>
          <label className="header3 text-grey-m_4">0.5 ETH</label>
          <label className="body2 text-grey-m_2 my-2">$989.10</label>
          <div className="flex space-x-2 my-4">
            <button className={styles.trx_filter_btn}>All</button>
            <button className={styles.trx_filter_btn}>Received</button>
            <button className={styles.trx_filter_btn}>Sent</button>
            <button className={styles.trx_filter_btn}>Pending</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
