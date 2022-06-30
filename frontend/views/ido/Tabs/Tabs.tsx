import Link from 'next/link';
import { useRouter } from 'next/router';
import { TabMenu } from '../../../shared/data/routes';
import styles from './Tabs.module.scss';

export interface ITabs {}

const Tabs: React.FC<ITabs> = () => {
  const { asPath } = useRouter();

  return (
    <div className="container space-x-4 m-8">
      {Object.keys(TabMenu).map((key, idx) => (
        <Link href={TabMenu[key].url} passHref key={idx}>
          <a
            className={`
                    ${styles.nav_link}
                    ${asPath === TabMenu[key].url ? styles.nav_link_active : ''}
                    `}
          >
            {TabMenu[key].title}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
