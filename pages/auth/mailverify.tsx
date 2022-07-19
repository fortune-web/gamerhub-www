import type { NextPage } from 'next';
import { Topbar } from '../../frontend/core/frame/ui/Topbar/Topbar';
import Mailverify from '../../frontend/views/auth/Mailverify/Mailverify';

const MailverifyPage: NextPage = () => {
  return (
    <div>
      <Topbar />
      <Mailverify />
    </div>
  );
};

export default MailverifyPage;
