import { NavLink } from 'react-router-dom';

import s from './toGoBack.module.css';
import getWindowSize from '../../hooks/useWResize';

const ToGoBack = () => {
  const viewPort = getWindowSize();

  return (
    <div type="button" className={s.toGoBack}>
      <NavLink className={s.link} to="/transactions">
        <svg
          width="18"
          height="12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 5H3.83l3.58-3.59L6 0 0 6l6 6 1.41-1.41L3.83 7H18V5Z"
            fill="#FF751D"
          />
        </svg>
        <p style={{ marginLeft: 18 }} className={s.toGoBackTitle}>
          {viewPort.width > 767 ? <span>Вернуться на главную</span> : ''}
        </p>
      </NavLink>
    </div>
  );
};

export default ToGoBack;
