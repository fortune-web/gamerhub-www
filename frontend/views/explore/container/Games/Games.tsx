import { Games as UIGames } from '../../ui/Games/Games';
import { allGames } from './data/allGames';

export const Games = () => {
  return (
    <UIGames
      data={[
        allGames.slice(0, 3),
        allGames.slice(3, 6),
        allGames.slice(6, 9),
        allGames.slice(9),
      ]}
    />
  );
};
