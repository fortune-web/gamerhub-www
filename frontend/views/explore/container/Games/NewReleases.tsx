import { Games as UIGames } from '../../ui/Games/Games';
import { allGames } from './data/allGames';

export const NewReleases = () => (
  <UIGames data={[allGames.slice(6, 9), allGames.slice(9)]} />
);
