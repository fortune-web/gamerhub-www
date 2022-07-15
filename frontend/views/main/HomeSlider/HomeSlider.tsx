import Image from 'next/image';
import GamerHub from '../../../shared/assets/img/gamerhub-bg-main.png';
import RecentlyBG from '../../../shared/assets/img/recently-bg.png';
import styles from './HomeSlider.module.scss';
import ReactPlayer from 'react-player';

const HomeSlider: React.FC = () => {
  return (
    <div className="flex justify-between">
      <img
        src="/static/img/gamerhub-bg-main2.png"
        className={styles.slider_img}
      />
    </div>
  );
};

export default HomeSlider;
