import { Games as UIGames } from '../../ui/Games/Games';
import { allGames } from './data/allGames';

export const MostPopular = () => (
  <UIGames data={[allGames.slice(3, 6), allGames.slice(9)]} />
);
