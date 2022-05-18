import Image from 'next/image';
import { AllGenresIcon } from '../Icons/Icons';
import styles from './Games.module.scss';
import classNames from 'classnames';
import Abeat from './assets/img/Abeats.jpg';
import MetaMoba from './assets/img/MetaMoba.jpg';
import Warhands from './assets/img/Warhands.jpg';
import PiratesLand from './assets/img/PiratesLand.png';
import CyberPop from './assets/img/CyberPop.png';
import Twilight from './assets/img/Twilight.png';
import HorizonLand from './assets/img/HorizonLand.png';
import SwiftShootout from './assets/img/SwiftShootout.jpg';
import Ikonic from './assets/img/Ikonic.png';
import MetaShooter from './assets/img/MetaShooter.png';
import { EachGame, Game } from '../Game/Game';

interface Props {
  data: EachGame[][];
}

export const Games = ({ data }: Props) => {
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
          {data.map((gameRow, index) => {
            return (
              <div className="row miscoo-row" key={index}>
                {gameRow.map((game, gIndex) => {
                  return (
                    <Game
                      imageSrc={game.imageSrc}
                      title={game.title}
                      ctaLink={game.ctaLink}
                      ctaText={game.ctaText}
                      key={gIndex}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
