import { NavLink, useLocation } from 'react-router-dom';
import s from './TransactionsNav.module.css';

const TransactionsNav = () => {
  const location = useLocation();
  return (
    <ul className={s.navList}>
      <li>
        <NavLink
          to="expense"
          className={({ isActive }) =>
            s.link +
            (isActive || location.pathname === '/transactions'
              ? ` ${s.activeLink}`
              : ` ${s.noActiveLink}`)
          }
        >
          Расходы
        </NavLink>
      </li>
      <li>
        <NavLink
          to="income"
          className={({ isActive }) =>
            s.link + (isActive ? ` ${s.activeLink}` : ` ${s.noActiveLink}`)
          }
        >
          Доходы
        </NavLink>
      </li>
    </ul>
  );
};

export default TransactionsNav;
