import Image from 'next/image';
import { AllGenresIcon } from '../Icons/Icons';
import styles from './Games.module.scss';
import classNames from 'classnames';
import Abeat from './assets/img/Abeats.jpg';
import MetaMoba from './assets/img/MetaMoba.jpg';
import Warhands from './assets/img/Warhands.jpg';
import PiratesLand from './assets/img/PiratesLand.png';
import CyberPop from './assets/img/CyberPop.png';
import Ookeenga from './assets/img/Ookeenga.png';
import Twilight from './assets/img/Twilight.png';
import HorizonLand from './assets/img/HorizonLand.png';
import SwiftShootout from './assets/img/SwiftShootout.jpg';

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
                <Image
                  src={Warhands}
                  alt="WarHands NFT"
                  width={500}
                  height={500}
                />
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
                <Image
                  src={MetaMoba}
                  alt="Meta Moba"
                  width={500}
                  height={500}
                />
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
                <Image
                  src={CyberPop}
                  alt="Cyberpop Metaverse"
                  width={500}
                  height={500}
                />
              </div>
              <div className="part-text">
                <h4 className="game-title">Cyberpop Metaverse</h4>
                <a
                  href="https://zengeon-cos-assets-1259788321.cos.ap-shanghai.myqcloud.com/PrinceOfPersia/Jenkins/AppFiles/Cyberpop_1.0.0_2022_04_27_23_38_36_V25_Dev.false_Symbols.AWS@USE_NFT_ASSETS.apk"
                  className="def-btn def-small"
                >
                  Play Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row miscoo-row">
          <div className="col-xl-4 col-lg-4 col-sm-6 mb-3">
            <div className="single-game">
              <div
                className={classNames('part-img', styles.gameImageContainer)}
              >
                <Image src={Twilight} alt="Twilight" width={500} height={500} />
              </div>
              <div className="part-text">
                <h4 className="game-title">Twilight</h4>
                <a
                  href="https://twilightgame.io/gamebeta_v5/index.html"
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
                <Image
                  src={SwiftShootout}
                  alt="Swift Shootout"
                  width={500}
                  height={500}
                />
              </div>
              <div className="part-text">
                <h4 className="game-title">Swift Shootout</h4>
                <a
                  href="https://www.swiftshootout.com/demo"
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
                <Image
                  src={HorizonLand}
                  alt="Horizon Land"
                  width={500}
                  height={500}
                />
              </div>
              <div className="part-text">
                <h4 className="game-title">Horizon Land</h4>
                <a
                  href="https://www.swiftshootout.com/demo"
                  className="def-btn def-small"
                >
                  Play Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row miscoo-row">
          <div className="col-xl-4 col-lg-4 col-sm-6 mb-3">
            <div className="single-game">
              <div
                className={classNames('part-img', styles.gameImageContainer)}
              >
                <Image
                  src={PiratesLand}
                  alt="Pirates Land"
                  width={500}
                  height={500}
                />
              </div>
              <div className="part-text">
                <h4 className="game-title">Pirates Land</h4>
                <a
                  href="https://twitter.com/PiratesLandio"
                  className="def-btn def-small"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6 mb-3">
            <div className="single-game">
              <div
                className={classNames('part-img', styles.gameImageContainer)}
              >
                <Image src={Abeat} alt="Abeats" width={500} height={500} />
              </div>
              <div className="part-text">
                <h4 className="game-title">Abeats</h4>
                <a
                  href="https://twitter.com/AbeatsGames"
                  className="def-btn def-small"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
