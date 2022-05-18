import classNames from 'classnames';
import styles from './Game.module.scss';
import Image from 'next/image';

export interface EachGame {
  imageSrc: StaticImageData;
  title: string;
  ctaText: string;
  ctaLink: string;
}

type Props = EachGame;

export const Game = ({ imageSrc, title, ctaText, ctaLink }: Props) => {
  return (
    <div className="col-xl-4 col-lg-4 col-sm-6 mb-3">
      <div className="single-game">
        <div className={classNames('part-img', styles.gameImageContainer)}>
          <Image src={imageSrc} alt={title} width={500} height={500} />
        </div>
        <div className="part-text">
          <h4 className="game-title">{title}</h4>
          <a href={ctaLink} className="def-btn def-small">
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
};
