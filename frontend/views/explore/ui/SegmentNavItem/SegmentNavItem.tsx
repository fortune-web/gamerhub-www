import classNames from 'classnames';
import Link from 'next/link';
import { ReactNode } from 'react';

export interface EachSegmentNavItem {
  navText: string;
  navLink: string;
  isActive: boolean;
  iconComponent: ReactNode;
}

type Props = EachSegmentNavItem;

export const SegmentNavItem = ({
  isActive,
  navText,
  navLink,
  iconComponent,
}: Props) => {
  return (
    <li className="nav-item">
      <Link href={navLink} passHref>
        <a className={classNames('nav-link', { active: isActive })}>
          <span className="icon icon-1">{iconComponent}</span>
          <span className="text">{navText}</span>
        </a>
      </Link>
    </li>
  );
};
