import { Games as UIGames } from '../../ui/Games/Games';
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

export const Games = () => {
  return (
    <UIGames
      data={[
        [
          {
            imageSrc: Warhands,
            title: 'WarHands NFT',
            ctaLink: 'https://bit.ly/3yj72HS',
            ctaText: 'Play Now',
          },
          {
            imageSrc: MetaMoba,
            title: 'Meta Moba',
            ctaLink:
              'https://play.google.com/apps/test/RQPfvpaiK-o/ahAIGJVrfT42zmnBb2u8J7oRp3Mt1kbWb-INihTvYEQynogGKVNRy23UIt5AgPhCSwtjFWxW_fJF3HpVmtebgEpUau',
            ctaText: 'Play Now',
          },
          {
            imageSrc: CyberPop,
            title: 'Cyberpop Metaverse',
            ctaLink:
              'https://zengeon-cos-assets-1259788321.cos.ap-shanghai.myqcloud.com/PrinceOfPersia/Jenkins/AppFiles/Cyberpop_1.0.0_2022_04_27_23_38_36_V25_Dev.false_Symbols.AWS@USE_NFT_ASSETS.apk',
            ctaText: 'Play Now',
          },
        ],
        [
          {
            imageSrc: Twilight,
            title: 'Twilight',
            ctaLink: 'https://twilightgame.io/gamebeta_v5/index.html',
            ctaText: 'Play Now',
          },
          {
            imageSrc: SwiftShootout,
            title: 'Swift Shootout',
            ctaLink: 'https://www.swiftshootout.com/demo',
            ctaText: 'Play Now',
          },
          {
            imageSrc: HorizonLand,
            title: 'Horizon Land',
            ctaLink: 'https://www.swiftshootout.com/demo',
            ctaText: 'Play Now',
          },
        ],
        [
          {
            imageSrc: PiratesLand,
            title: 'Pirates Land',
            ctaLink: 'https://twitter.com/PiratesLandio',
            ctaText: 'Learn More',
          },
          {
            imageSrc: Abeat,
            title: 'Abeats',
            ctaLink: 'https://twitter.com/AbeatsGames',
            ctaText: 'Learn More',
          },
          {
            imageSrc: Ikonic,
            title: 'Ikonic',
            ctaLink: 'https://youtu.be/wrSLZypDFrg',
            ctaText: 'Learn More',
          },
        ],
        [
          {
            imageSrc: MetaShooter,
            title: 'Meta Shooter',
            ctaLink: 'https://youtu.be/ZwC9Ux0vLy8',
            ctaText: 'Learn More',
          },
        ],
      ]}
    />
  );
};
