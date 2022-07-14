import Image from 'next/image';
import styles from './HomeGames.module.scss';
import arrow from '../../../shared/assets/icon/arrow.svg';
import revohand from '../../../shared/assets/img/revohand.png';
import warhandsnft from '../../../shared/assets/img/warhandsnft.png';
import piratesland from '../../../shared/assets/img/piratesland.png';
import swiftshootout from '../../../shared/assets/img/swiftshootout.png';
import ookeenga from '../../../shared/assets/img/ookeenga.png';
import metamoba from '../../../shared/assets/img/metamoba.png';
import twilight from '../../../shared/assets/img/twilight.png';
import metashooter from '../../../shared/assets/img/metashooter.png';
import horizonmetaverse from '../../../shared/assets/img/horizonmetaverse.png';
import cybermetaverse from '../../../shared/assets/img/cybermetaverse.png';
import Ikonmarketplace from '../../../shared/assets/img/Ikonmarketplace.png';
import classNames from 'classnames';

const homeGames = [
  {
    title: 'All Games',
    link: '#',
    content: [
      {
        imageSrc: metashooter,
        title: 'Meta Shooter',
        ctaLink: 'https://youtu.be/ZwC9Ux0vLy8',
        ctaText: 'Learn More',
      },
      {
        imageSrc: twilight,
        title: 'Twilight',
        ctaLink: 'https://twilightgame.io/gamebeta_v5/index.html',
        ctaText: 'Play Now',
      },
      {
        imageSrc: metamoba,
        title: 'Meta Moba',
        ctaLink:
          'https://play.google.com/apps/test/RQPfvpaiK-o/ahAIGJVrfT42zmnBb2u8J7oRp3Mt1kbWb-INihTvYEQynogGKVNRy23UIt5AgPhCSwtjFWxW_fJF3HpVmtebgEpUau',
        ctaText: 'Play Now',
      },
      {
        imageSrc: ookeenga,
        title: 'Ookeenga',
        ctaLink: '#',
        ctaText: 'Play Now',
      },
      {
        imageSrc: swiftshootout,
        title: 'Swift Shootout',
        ctaLink: 'https://www.swiftshootout.com/demo',
        ctaText: 'Play Now',
      },
      {
        imageSrc: piratesland,
        title: 'Pirates Land',
        ctaLink: 'https://twitter.com/PiratesLandio',
        ctaText: 'Learn More',
      },
      {
        imageSrc: warhandsnft,
        title: 'WarHands NFT',
        ctaLink: 'https://bit.ly/3yj72HS',
        ctaText: 'Play Now',
      },
      {
        imageSrc: revohand,
        title: 'Revohand',
        ctaLink: '#',
        ctaText: 'Play Now',
      },
    ],
  },
  {
    title: 'Metaverse',
    link: '#',
    content: [
      {
        imageSrc: horizonmetaverse,
        title: 'Horizon Land Metaverse',
        ctaLink: '#',
        ctaText: 'Learn More',
      },
      {
        imageSrc: cybermetaverse,
        title: 'Cyber Metaverse',
        ctaLink: '#',
        ctaText: 'Learn More',
      },
    ],
  },
  {
    title: 'NFT Marketplaces',
    link: '#',
    content: [
      {
        imageSrc: Ikonmarketplace,
        title: 'Ikon Marketplace',
        ctaLink: '#',
        ctaText: 'Learn More',
      },
      {
        imageSrc: Ikonmarketplace,
        title: 'Ikon Marketplace',
        ctaLink: '#',
        ctaText: 'Learn More',
      },
      {
        imageSrc: Ikonmarketplace,
        title: 'Ikon Marketplace',
        ctaLink: '#',
        ctaText: 'Learn More',
      },
      {
        imageSrc: Ikonmarketplace,
        title: 'Ikon Marketplace',
        ctaLink: '#',
        ctaText: 'Learn More',
      },
    ],
  },
];

const HomeGames: React.FC = () => {
  return (
    <div>
      {homeGames.map((each) => (
        <div>
          <div className="flex mt-8">
            <label className="header4 mr-4 py-1.5 text-grey-m_4">
              {each.title}
            </label>
            <button className={styles.view_all}>
              <a href={each.link} className="flex items-center">
                <div className="mr-2.5">
                  <span>View all</span>
                </div>
                <Image src={arrow} />
              </a>
            </button>
          </div>
          <div className="mt-6">
            <div className="grid grid-cols-4 gap-x-8 gap-y-6">
              {each.content.map((each) => (
                <div className={styles.single_game}>
                  <div
                    className={classNames(
                      styles.part_img,
                      styles.gameImageContainer
                    )}
                  >
                    <Image
                      src={each.imageSrc}
                      alt={each.title}
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className={styles.part_text}>
                    <h4 className={styles.game_title}>{each.title}</h4>
                    <a
                      href={each.ctaLink}
                      className={classNames(styles.def_btn, styles.def_small)}
                    >
                      {each.ctaText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeGames;
