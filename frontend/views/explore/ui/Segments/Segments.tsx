import { EachSegmentNavItem } from '../SegmentNavItem/SegmentNavItem';
import { EachSegmentFilterDropdown } from '../SegmentFilterDropdown/SegmentFilterDropdown';
import { SegmentNavItems } from '../SegmentNavItems/SegmentNavItems';
import { SegmentFilters } from '../SegmentFilters/SegmentFilters';

interface Props {
  navItems: EachSegmentNavItem[];
  filterDropdownItems: EachSegmentFilterDropdown[];
}

export const Segments = ({ navItems, filterDropdownItems }: Props) => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-4">
      <SegmentNavItems data={navItems} />
      <SegmentFilters data={filterDropdownItems} />
    </div>
  );
};
