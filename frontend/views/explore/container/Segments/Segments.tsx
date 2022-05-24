import { RootRoutes } from '../../../../shared/data/routes';
import {
  AllGenresIcon,
  TrendingNowIcon,
  NewReleaseIcon,
  MostPopularIcon,
} from '../../ui/Icons/Icons';
import { Segments as UISegments } from '../../ui/Segments/Segments';
import { useRouter } from 'next/router';

export const Segments = () => {
  const { asPath: fullPath } = useRouter();

  return (
    <UISegments
      navItems={[
        {
          navLink: RootRoutes.explore.url,
          navText: 'All Genres',
          isActive: fullPath === RootRoutes.explore.url,
          iconComponent: <AllGenresIcon />,
        },
        {
          navLink: RootRoutes.exploreTrending.url,
          navText: 'Trending Now',
          isActive: fullPath === RootRoutes.exploreTrending.url,
          iconComponent: <TrendingNowIcon />,
        },
        {
          navLink: RootRoutes.exploreNewReleases.url,
          navText: 'New Release',
          isActive: fullPath === RootRoutes.exploreNewReleases.url,
          iconComponent: <NewReleaseIcon />,
        },
        {
          navLink: RootRoutes.exploreMostPopular.url,
          navText: 'Most Popular',
          isActive: fullPath === RootRoutes.exploreMostPopular.url,
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
