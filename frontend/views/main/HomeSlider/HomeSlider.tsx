import Image from 'next/image';
import GamerHub from '../../../shared/assets/img/gamerhub-bg-main.png';
import RecentlyBG from '../../../shared/assets/img/recently-bg.png';
import styles from './HomeSlider.module.scss';

const HomeSlider: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div>
        <img
          src="/static/img/gamerhub-bg-main.png"
          className={styles.slider_img}
        />
      </div>
      <div>
        <img src="/static/img/recently-bg.png" className={styles.slider_img} />
      </div>
    </div>
  );
};

export default HomeSlider;
