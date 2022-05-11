import Image from 'next/image';
import mockImage from './assets/img/assets-1.jpg';
import { AllGenresIcon, NewReleaseIcon } from '../Icons/Icons';
import styles from './Games.module.scss';
import classNames from 'classnames';

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
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-game">
              <div
                className={classNames('part-img', styles.gameImageContainer)}
              >
                <Image src={mockImage} alt="Game" width={500} height={500} />
              </div>
              <div className="part-text">
                <h4 className="game-title">IceBall 71</h4>
                <a href="#0" className="def-btn def-small">
                  Play Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-game">
              <div
                className={classNames('part-img', styles.gameImageContainer)}
              >
                <Image src={mockImage} alt="Game" width={500} height={500} />
              </div>
              <div className="part-text">
                <h4 className="game-title">IceBall 71</h4>
                <a href="#0" className="def-btn def-small">
                  Play Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-game">
              <div
                className={classNames('part-img', styles.gameImageContainer)}
              >
                <Image src={mockImage} alt="Game" width={500} height={500} />
              </div>
              <div className="part-text">
                <h4 className="game-title">IceBall 71</h4>
                <a href="#0" className="def-btn def-small">
                  Play Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-game">
              <div
                className={classNames('part-img', styles.gameImageContainer)}
              >
                <Image src={mockImage} alt="Game" width={500} height={500} />
              </div>
              <div className="part-text">
                <h4 className="game-title">IceBall 71</h4>
                <a href="#0" className="def-btn def-small">
                  Play Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-game">
              <div
                className={classNames('part-img', styles.gameImageContainer)}
              >
                <Image src={mockImage} alt="Game" width={500} height={500} />
              </div>
              <div className="part-text">
                <h4 className="game-title">IceBall 71</h4>
                <a href="#0" className="def-btn def-small">
                  Play Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-game">
              <div
                className={classNames('part-img', styles.gameImageContainer)}
              >
                <Image src={mockImage} alt="Game" width={500} height={500} />
              </div>
              <div className="part-text">
                <h4 className="game-title">IceBall 71</h4>
                <a href="#0" className="def-btn def-small">
                  Play Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-game">
              <div
                className={classNames('part-img', styles.gameImageContainer)}
              >
                <Image src={mockImage} alt="Game" width={500} height={500} />
              </div>
              <div className="part-text">
                <h4 className="game-title">IceBall 71</h4>
                <a href="#0" className="def-btn def-small">
                  Play Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-game">
              <div
                className={classNames('part-img', styles.gameImageContainer)}
              >
                <Image src={mockImage} alt="Game" width={500} height={500} />
              </div>
              <div className="part-text">
                <h4 className="game-title">IceBall 71</h4>
                <a href="#0" className="def-btn def-small">
                  Play Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="all-games anim-change">
        <div className="title-cover">
          <h4 className="games-title">
            <span className="icon icon-8">
              <NewReleaseIcon />
            </span>
            New Release
          </h4>
        </div>
        <div className="row miscoo-row">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-game">
              <div
                className={classNames('part-img', styles.gameImageContainer)}
              >
                <Image src={mockImage} alt="Game" width={500} height={500} />
              </div>
              <div className="part-text">
                <h4 className="game-title">IceBall 71</h4>
                <a href="#0" className="def-btn def-small">
                  Play Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-game">
              <div
                className={classNames('part-img', styles.gameImageContainer)}
              >
                <Image src={mockImage} alt="Game" width={500} height={500} />
              </div>
              <div className="part-text">
                <h4 className="game-title">IceBall 71</h4>
                <a href="#0" className="def-btn def-small">
                  Play Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-game">
              <div
                className={classNames('part-img', styles.gameImageContainer)}
              >
                <Image src={mockImage} alt="Game" width={500} height={500} />
              </div>
              <div className="part-text">
                <h4 className="game-title">IceBall 71</h4>
                <a href="#0" className="def-btn def-small">
                  Play Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-game">
              <div
                className={classNames('part-img', styles.gameImageContainer)}
              >
                <Image src={mockImage} alt="Game" width={500} height={500} />
              </div>
              <div className="part-text">
                <h4 className="game-title">IceBall 71</h4>
                <a href="#0" className="def-btn def-small">
                  Play Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-game">
              <div
                className={classNames('part-img', styles.gameImageContainer)}
              >
                <Image src={mockImage} alt="Game" width={500} height={500} />
              </div>
              <div className="part-text">
                <h4 className="game-title">IceBall 71</h4>
                <a href="#0" className="def-btn def-small">
                  Play Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-game">
              <div
                className={classNames('part-img', styles.gameImageContainer)}
              >
                <Image src={mockImage} alt="Game" width={500} height={500} />
              </div>
              <div className="part-text">
                <h4 className="game-title">IceBall 71</h4>
                <a href="#0" className="def-btn def-small">
                  Play Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-game">
              <div
                className={classNames('part-img', styles.gameImageContainer)}
              >
                <Image src={mockImage} alt="Game" width={500} height={500} />
              </div>
              <div className="part-text">
                <h4 className="game-title">IceBall 71</h4>
                <a href="#0" className="def-btn def-small">
                  Play Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
