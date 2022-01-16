import logo from '../../imges/svg/logo.svg';
import s from './Header.module.css';
import UserMenuMob from './UserMenu/UserMenuMob';
import UserMenu from './UserMenu/UserMenu';
import { useEffect, useState } from 'react';

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return size;
}

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
/////////////////////////////////////////////////////////////////
// import logo from '../../imges/svg/logo.svg';
// import s from './Header.module.css';
// import UserMenuMob from './UserMenu/UserMenuMob';
// import UserMenu from './UserMenu/UserMenu';

// function Header() {
//   let intViewportWidth = window.innerWidth;

//   return (
//     <div className={s.HeaderContainer}>
//       <img src={logo} alt="logo" className={s.logo} />
//       {intViewportWidth <= 787 ? <UserMenuMob /> : <UserMenu />}
//     </div>
//   );
// }
// export default Header;
