export interface EachSegmentFilterDropdown {
  ctaText: string;
}

type Props = EachSegmentFilterDropdown;

export const SegmentFilterDropdown = ({ ctaText }: Props) => {
  return (
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
          {ctaText}
        </button>
      </div>
    </div>
  );
};
