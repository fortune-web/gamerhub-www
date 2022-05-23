import {
  AllGenresIcon,
  TrendingNowIcon,
  NewReleaseIcon,
  MostPopularIcon,
} from '../../ui/Icons/Icons';
import { Segments as UISegments } from '../../ui/Segments/Segments';

export const Segments = () => {
  return (
    <UISegments
      navItems={[
        {
          navLink: '#',
          navText: 'All Genres',
          isActive: true,
          iconComponent: <AllGenresIcon />,
        },
        {
          navLink: '#',
          navText: 'Trending Now',
          isActive: false,
          iconComponent: <TrendingNowIcon />,
        },
        {
          navLink: '#',
          navText: 'New Release',
          isActive: false,
          iconComponent: <NewReleaseIcon />,
        },
        {
          navLink: '#',
          navText: 'Most Popular',
          isActive: false,
          iconComponent: <MostPopularIcon />,
        },
      ]}
      filterDropdownItems={[
        {
          ctaText: 'Filter By Category',
        },
        {
          ctaText: 'Filter By Tag',
        },
      ]}
    />
  );
};
