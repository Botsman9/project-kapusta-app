import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../imges/svg/logo.svg';
import s from './Header.module.css';
import UserMenuMob from './UserMenu/UserMenuMob';
import UserMenu from './UserMenu/UserMenu';
import useWindowSize from '../../hooks/useWindowSize';

function Header() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [height, width] = useWindowSize();
  return (
    <div className={s.HeaderContainer}>
      <Link to={'/'}>
        <img src={logo} alt="logo" className={s.logo} />
      </Link>

      {isLoggedIn && (width <= 787 ? <UserMenuMob /> : <UserMenu />)}
    </div>
  );
}
export default Header;
