import Image from 'next/image';
import { useState } from 'react';
import styles from './Gamerhub.module.scss';
import classNames from 'classnames';
import beforeIcon from '../../../shared/assets/icon/beforeIcon.png';
import discord from '../../../shared/assets/icon/discord.png';
import link from '../../../shared/assets/icon/link.png';
import twitter from '../../../shared/assets/icon/twitter.png';
import telegram from '../../../shared/assets/icon/telegram.png';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export interface IGamerHub {
  handle: string | undefined;
}

export const tabsData = [
  {
    label: 'About',
    content:
      "HaloX takes virtual assets a step further with the introduction of planets, spaceships, and galaxies. \
      NFTs for in game items means players literally own and control what they buy, earn, or craft. \
      This goes beyond having to prove the item's rarity, it opens the door to infinite scalability.<br>\
      HaloX takes virtual assets a step further with the introduction of planets spaceships and galaxies. \
      NFTs for in-game items means players literally own and control what they buy, earn, or craft. This goes \
      beyond having to prove the item's rarity, it opens the door to infinite scalability.",
    option: ['Action', 'P2E', 'NFT'],
  },
  {
    label: 'Tokenomics',
    content: '.....',
    option: ['Action', 'P2E', 'NFT'],
  },
  {
    label: 'Team',
    content: '......',
    option: ['Action', 'P2E', 'NFT'],
  },
];

const Gamerhub: React.FC<IGamerHub> = (props) => {
  const { handle } = props;
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <div>
      <div className="flex mt-3 gap-2 items-center">
        <Image src={beforeIcon} />
        <h1 className="body1 text-[15px] text-grey-m_3">Back</h1>
      </div>
      <div className="mt-3 relative h-max">
        <img src="/static/img/HaloX.png" className={styles.img} />
        <div className={styles.text}>
          <h1 className="header1 text-grey-m_4">
            {handle && handle.charAt(0).toUpperCase() + handle.slice(1)}
          </h1>
          <h1 className="header6 text-grey-m_3 ">
            Halox takes virtual assets a step further with the introduction of
            planets, spaceships, and galaxies.
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-10 mt-8">
        <div className="col-start-1 col-end-5 ">
          <Carousel>
            <div>
              <img src="/static/img/spaceship.png" />
            </div>
            <div>
              <img src="/static/img/tunnel.png" />
            </div>
            <div>
              <img src="/static/img/hal.png" />
            </div>
            <div>
              <img src="/static/img/galaxy.png" />
            </div>
          </Carousel>
        </div>
        <div className="col-start-5 col-end-8">
          <div className="flex justify-between">
            <h1 className="body1 font-normal text-grey-m_2">Release status</h1>
            <h1 className="body1 font-normal text-grey-m_4">Released</h1>
          </div>
          <div className="flex justify-between mt-3">
            <h1 className="body1 font-normal text-grey-m_2">ICO Price</h1>
            <h1 className="body1 font-normal text-grey-m_4">$0.50</h1>
          </div>
          <div className="flex justify-between mt-3">
            <h1 className="body1 font-normal text-grey-m_2">Chain</h1>
            <h1 className="body1 font-normal text-grey-m_4">Solana</h1>
          </div>
          <div className="flex justify-between mt-3">
            <h1 className="body1 font-normal text-grey-m_2">Token</h1>
            <h1 className="body1 font-normal text-grey-m_4">FCON</h1>
          </div>
          <img src="/static/img/gamerline.png" className={styles.img} />
          <div className="flex justify-between mt-3">
            <h1 className="body1 font-normal text-grey-m_2">Language</h1>
            <h1 className="body1 font-normal text-grey-m_4">English</h1>
          </div>
          <div className="flex justify-between mt-3">
            <h1 className="body1 font-normal text-grey-m_2">Developer</h1>
            <h1 className="body1 font-normal text-grey-m_4">
              Abstract Labs inc.
            </h1>
          </div>
          <div className="flex justify-between mt-3">
            <h1 className="body1 font-normal text-grey-m_2">Community</h1>
            <div>
              <a href="#" className="mr-4">
                <Image src={link} />
              </a>
              <a href="#" className="mr-4">
                <Image src={discord} />
              </a>
              <a href="#" className="mr-4">
                <Image src={telegram} />
              </a>
              <a href="#">
                <Image src={twitter} />
              </a>
            </div>
          </div>
          <div className="flex justify-between mt-9 gap-4">
            <button className={styles.play_btn}>
              <a href="#" className="body1 font-normal text-primary-pink5">
                Play Game
              </a>
            </button>
            <img src="/static/img/heartIcon.png" className={styles.heartIcon} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-10 mt-8">
        <div className="col-start-1 col-end-5">
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
                  <div className={classNames('body1', styles.option)}>
                    {each}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gamerhub;
