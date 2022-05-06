import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  AllGenresIcon,
  TrendingNowIcon,
  NewReleaseIcon,
  MostPopularIcon,
} from './SegmentsIcons';

export const Segments = () => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-4">
      <div className="game-menu">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <span className="icon icon-1">
                <AllGenresIcon />
              </span>
              <span className="text">All Genres</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span className="icon icon-7">
                <TrendingNowIcon />
              </span>
              <span className="text">Trending Now</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span className="icon icon-8">
                <NewReleaseIcon />
              </span>
              <span className="text">New Release</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span className="icon icon-9">
                <MostPopularIcon />
              </span>
              <span className="text">Most Popular</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="games-filter-area">
        <div className="blog-search">
          <form>
            <input type="text" placeholder="Find your fav game..." />
            <button>
              <FontAwesomeIcon icon={['fas', 'search']} />
            </button>
          </form>
        </div>
        <div className="filtering">
          <div className="dropdown">
            <button
              className="dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Filter By Category
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Action Games
              </a>
              <a className="dropdown-item" href="#">
                Intellectual
              </a>
              <a className="dropdown-item" href="#">
                Online Casino
              </a>
              <a className="dropdown-item" href="#">
                Lottery Draw
              </a>
              <a className="dropdown-item" href="#">
                Chess Master
              </a>
            </div>
          </div>
        </div>
        <div className="filtering">
          <div className="dropdown">
            <button
              className="dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Filter By Tags
            </button>
            <div
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton2"
            >
              <a className="dropdown-item" href="#">
                blog
              </a>
              <a className="dropdown-item" href="#">
                games
              </a>
              <a className="dropdown-item" href="#">
                casino
              </a>
              <a className="dropdown-item" href="#">
                racing
              </a>
              <a className="dropdown-item" href="#">
                fighting
              </a>
              <a className="dropdown-item" href="#">
                action
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
