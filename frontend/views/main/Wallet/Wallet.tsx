import React, { useState } from 'react';
import Image from 'next/image';
import copy from '../../../shared/assets/icon/copy.png';
import upfill from '../../../shared/assets/icon/upfill.svg';
import { tabsData } from '../Gamerhub/Gamerhub';
import styles from './Wallet.module.scss';
import classNames from 'classnames';

const Wallet: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
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
      </div>
      <div>
        <div className={classNames('flex space-x-3', styles.btn_border)}>
          {/* Loop through tab data and render button for each. */}
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                className={`Ag text-grey-m_3 py-2 border-b-2 uppercase ${
                  idx === activeTabIndex
                    ? 'border-primary-main text-grey-m_4'
                    : 'border-transparent '
                }`}
                // Change the active tab on click.
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        {/* Show active tab content. */}
        <div>
          <h1 className="header4 mt-5 text-grey-m_4">
            {tabsData[activeTabIndex].label}
          </h1>
          <h1
            dangerouslySetInnerHTML={{
              __html: tabsData[activeTabIndex].content,
            }}
            className="body1 font-normal text-grey-m_3 mt-6 leading-6 max-w-xl"
          ></h1>
          <div className="mt-6 flex">
            {tabsData[activeTabIndex].option.map((each) => (
              <div className={classNames('body1', styles.option)}>{each}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
