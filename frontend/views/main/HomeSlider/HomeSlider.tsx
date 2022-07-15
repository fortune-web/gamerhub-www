import React from 'react';
import ReactPlayer from 'react-player';
import styles from './HomeSlider.module.scss';

const HomeSlider: React.FC = () => {
  return (
    <div className="flex justify-between">
      <video
        src="/static/homevideo.mp4"
        autoPlay
        loop
        className={styles.slider_img}
      />
    </div>
  );
};

export default HomeSlider;
