import { NextComponentType } from 'next';
import { Footer } from './ui/Footer/Footer';
import { Topbar } from './ui/Topbar/Topbar';

export const Frame: NextComponentType = ({ children }) => (
  <>
    <Topbar />
    {children}
    <Footer />
  </>
);
