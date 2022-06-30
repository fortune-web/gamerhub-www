import Image from 'next/image';
import styles from './Tokenomics.module.scss';

export interface ITokenomics {}

const Tokenomics: React.FC<ITokenomics> = () => {
  return (
    <div className={styles.content} id="tokenomics">
      <div className="space-y-4">
        <label className="header3 text-grey-m_4">Tokenomics</label>
        <p className="body2 text-grey-m_4">
          The GHT token is a multifunctional (utility, governance) and
          multichain crypto token minted via smart contract by and for GamerHub.
          The GHT token is a fungible digital asset of fixed quantity issued on
          different blockchain networks. The GHT token is primarily deployed on
          the Ethereum blockchain and will be bridged on the Binance Smart
          Chain, Polygon, and potentially the Terra and Solana Blockchain.
          <br />
          The total number of GHT tokens minted at TGE is 500,000,000. We have
          incorporated a vesting schedule into our tokenomics. To view our
          tokenomics please click here. Key Token Details
        </p>
      </div>
      <div className="mt-8">
        <label className="header3 text-grey-m_4 mb-4">Token Details</label>
        <Image
          src="/static/img/token_details.png"
          width="800"
          height="480"
          alt="token_details"
        />
      </div>
      <div className="mt-8">
        <label className="header3 text-grey-m_4 mb-4">Token Distribution</label>
        <Image
          src="/static/img/token_distribution.png"
          width="800"
          height="480"
          alt="token_distribution"
        />
      </div>
      <div className="mt-8">
        <label className="header3 text-grey-m_4 mb-4">
          Token Releases Schedule
        </label>
        <Image
          src="/static/img/token_schedule.png"
          width="800"
          height="480"
          alt="token_schedule"
        />
      </div>
    </div>
  );
};

export default Tokenomics;
