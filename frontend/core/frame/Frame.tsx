import { FC } from 'react';
import { Footer } from './ui/Footer/Footer';
import { Topbar } from './ui/Topbar/Topbar';

export type PageType = 'landing' | 'others';

interface Props {
  pageType?: PageType;
}

export const Frame: FC<Props> = ({ children, pageType = 'others' }) => (
  <>
    <Topbar pageType={pageType ?? 'landing'} />
    {children}
    <Footer />
  </>
);
