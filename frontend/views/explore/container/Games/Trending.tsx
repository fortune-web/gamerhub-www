import { Games as UIGames } from '../../ui/Games/Games';
import { allGames } from './data/allGames';

export const Trending = () => <UIGames data={[allGames.slice(0, 3)]} />;
