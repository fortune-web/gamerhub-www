import Image from 'next/image';
import mockImage from './assets/img/assets-1.jpg';
import { AllGenresIcon, NewReleaseIcon } from '../Icons/Icons';
import styles from './Games.module.scss';
import classNames from 'classnames';
import Abeat from './assets/img/Abeats.jpg';
import MetaMoba from './assets/img/MetaMoba.jpg';
import Warhands from './assets/img/Warhands.jpg';

export const Games = () => {
  return (
    <div className="col-xl-9 col-lg-9 col-md-8">
      <div className="all-games anim-change">
        <div className="title-cover">
          <h4 className="games-title">
            <span className="icon icon-1">
              <AllGenresIcon />
            </span>
            All Games
          </h4>
        </div>
        <div className="row miscoo-row">
          <div className="col-xl-4 col-lg-4 col-sm-6 mb-3">
            <div className="single-game">
              <div
                className={classNames('part-img', styles.gameImageContainer)}
              >
                <Image src={Warhands} alt="Game" width={500} height={500} />
              </div>
              <div className="part-text">
                <h4 className="game-title">WarHands NFT</h4>
                <a href="https://bit.ly/3yj72HS" className="def-btn def-small">
                  Play Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6 mb-3">
            <div className="single-game">
              <div
                className={classNames('part-img', styles.gameImageContainer)}
              >
                <Image src={MetaMoba} alt="Game" width={500} height={500} />
              </div>
              <div className="part-text">
                <h4 className="game-title">Meta Moba</h4>
                <a
                  href="https://play.google.com/apps/test/RQPfvpaiK-o/ahAIGJVrfT42zmnBb2u8J7oRp3Mt1kbWb-INihTvYEQynogGKVNRy23UIt5AgPhCSwtjFWxW_fJF3HpVmtebgEpUau"
                  className="def-btn def-small"
                >
                  Play Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6 mb-3">
            <div className="single-game">
              <div
                className={classNames('part-img', styles.gameImageContainer)}
              >
                <Image src={Abeat} alt="Game" width={500} height={500} />
              </div>
              <div className="part-text">
                <h4 className="game-title">Abeats Games</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
