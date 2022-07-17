import React from 'react';
import ReactPlayer from 'react-player';
import styles from './HomeSlider.module.scss';
import joystick from '../../../shared/assets/icon/joystick.svg';
import buttonIcon from '../../../shared/assets/icon/buttonIcon.png';

import Image from 'next/image';

const HomeSlider: React.FC = () => {
  return (
    <div className="relative">
      <video
        src="/static/homevideo.mp4"
        autoPlay
        loop
        className={styles.slider_img}
      />
      <div className="absolute bottom-60 left-14">
        <label className="header2 text-grey-m_4">Welcome to GamerHub</label>
      </div>
      <div className="absolute bottom-48 left-14">
        <label className="body2 font-normal text-grey-m_4">
          Experience the future of gaming across multiple
          <br /> chains, all in one place.
        </label>
      </div>
      <div className="absolute bottom-28 left-14">
        <button className="grid">
          <div className={styles.connect_bg}></div>
          <div className={styles.connect_child}>
            <a href="#" className="flex items-center">
              <Image src={joystick} />
              <div className="my-3 text-grey-m_4 ml-4">
                <span>Connect wallet</span>
              </div>
            </a>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;
