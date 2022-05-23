import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  EachSegmentFilterDropdown,
  SegmentFilterDropdown,
} from '../SegmentFilterDropdown/SegmentFilterDropdown';

interface Props {
  data: EachSegmentFilterDropdown[];
}

export const SegmentFilters = ({ data }: Props) => {
  return (
    <div className="games-filter-area">
      <div className="blog-search">
        <form>
          <input type="text" placeholder="Find your fav game..." />
          <button>
            <FontAwesomeIcon icon={['fas', 'search']} />
          </button>
        </form>
      </div>
      {data.map((dropdown, index) => (
        <SegmentFilterDropdown {...dropdown} key={index} />
      ))}
    </div>
  );
};
