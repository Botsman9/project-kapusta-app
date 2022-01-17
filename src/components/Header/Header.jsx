import logo from '../../imges/svg/logo.svg';
import s from './Header.module.css';
import UserMenuMob from './UserMenu/UserMenuMob';
import UserMenu from './UserMenu/UserMenu';
import useWindowSize from '../../hooks/useWindowSize';

function Header() {
  const [height, width] = useWindowSize();
  return (
    <div className={s.HeaderContainer}>
      <img src={logo} alt="logo" className={s.logo} />
      {width <= 787 ? <UserMenuMob /> : <UserMenu />}
    </div>
  );
}
export default Header;
