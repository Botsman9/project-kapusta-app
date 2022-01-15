import logo from '../../imges/svg/logo.svg';
import s from './Header.module.css';
function Header() {
  return (
    <div className={s.HeaderContainer}>
      <img src={logo} alt="logo" className={s.logo} />
    </div>
  );
}
export default Header;
