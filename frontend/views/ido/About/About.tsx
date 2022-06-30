import { NextPage } from 'next';
import styles from './About.module.scss';

const About: NextPage = () => {
  return (
    <div className={styles.content} id="about">
      <div className="space-y-4">
        <label className="header3 text-grey-m_4">About GamerHub</label>
        <p className="body2 text-grey-m_3">
          The GamerHub team is building an ecosystem for crypto gamers to Play,
          Earn and Thrive through aggregated gameplay, enhanced rewards, and
          decentralized governance. GamerHub makes it easy for Gamers to have
          access to and play different games on different blockchain platforms
          all together in one place.
          <br />
          The solution provides a lucrative environment for both gamers and
          developers, allowing them to tap into the vast opportunities present
          in the play-to-earn industry. The solution provides players with
          unprecedented optionality in terms of cutting-edge play-to-earn gaming
          options. Developers receive the tools necessary to build and deploy
          their own play-to-earn games.
        </p>
      </div>
      <div className="space-y-4 mt-8">
        <label className="header3 text-grey-m_4">What We Do</label>
        <p className="body2 text-grey-m_4">
          <big>For Gamers</big>
          <br />
          <strong>Play-Earn-Thrive</strong>
          <br />
          Gamerhub ecosystem is a platform for crypto gamers to Play, Earn and
          Thrive through aggregated gameplay, enhanced rewards and decentralized
          governance. Access to play hundreds of games across different
          blockchains Earn better game rewards Participate in inter-metaverse
          contests and competitions Trade game assets, NFTs, and branded
          merchandise Ecosystem governance
        </p>
        <p className="body2 text-grey-m_4">
          <big>For Game Developers</big>
          <br />
          <strong>Create-Earn-Improve</strong>
          <br />
          GamerHub provides necessary resources and support to developers for
          the creation and launch of games, guilds, NFTs, metaverses and more. A
          large community of gamers to play their games Ability to list, build
          and launch games on the Gamerhub platform Access to SDKs to improve
          gaming experience Upload, launch and auction game assets and NFTs on
          Gamerhub marketplaces
        </p>
        <p className="body2 text-grey-m_4">
          <big>For Game Streamers</big>
          <br />
          <strong>Stream-Brand-Earn</strong>
          <br />
          GamerHub enables Gamers to create streaming content to give the
          community a front-seat view of the GamerHub crypto gaming experience.
          Create streaming content for gamers Earn from fees and royalties Brand
          and market your content and merchandise
        </p>
        <p className="body2 text-grey-m_4">
          <big>For NFT Enthusiasts</big>
          <br />
          <strong>Create-Trade-Earn</strong>
          <br />
          Our NFT marketplace aggregator enables NFT enthusiasts to access
          advanced NFT functionalities from Gamerhub and 3rd-party platforms.
          Create, mint and auction NFTs on Gamerhub marketplaces Brand your NFTs
          using GamerBrand tools
        </p>
      </div>
    </div>
  );
};

export default About;
