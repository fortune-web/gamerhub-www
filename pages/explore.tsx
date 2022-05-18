import { NextPage } from 'next';
import { Frame } from '../frontend/core/frame/Frame';
import { UserProfileProvider } from '../frontend/shared/contexts/UserProfileContext/UserProfileProvider';
import { Games } from '../frontend/views/explore/container/Games/Games';
import { Segments } from '../frontend/views/explore/ui/Segments/Segments';

const Explore: NextPage = () => {
  return (
    <UserProfileProvider>
      <Frame>
        <div className="games game-page">
          <div className="container">
            <div className="row">
              <Segments />
              <Games />
            </div>
          </div>
        </div>
      </Frame>
    </UserProfileProvider>
  );
};

export default Explore;
