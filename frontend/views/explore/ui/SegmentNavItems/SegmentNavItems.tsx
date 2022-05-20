import {
  SegmentNavItem,
  EachSegmentNavItem,
} from '../SegmentNavItem/SegmentNavItem';

interface Props {
  data: EachSegmentNavItem[];
}

export const SegmentNavItems = ({ data }: Props) => {
  return (
    <div className="game-menu">
      <ul className="nav flex-column">
        {data.map((navItem, index) => {
          return <SegmentNavItem {...navItem} key={index} />;
        })}
      </ul>
    </div>
  );
};
