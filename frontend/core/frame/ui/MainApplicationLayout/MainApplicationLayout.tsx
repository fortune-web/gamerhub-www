import AppBar from '../../../../views/main/AppBar/AppBar';
import NavMenu from '../../../../views/main/NavMenu/NavMenu';

export interface IMainApplicationLayout
  extends React.ComponentPropsWithoutRef<'div'> {}

const MainApplicationLayout: React.FC<IMainApplicationLayout> = ({
  children,
}) => {
  return (
    <div className="bg-bg-main min-h-screen flex">
      <NavMenu />
      <div className="w-full px-8">
        <AppBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default MainApplicationLayout;
