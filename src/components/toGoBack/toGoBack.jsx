import { NavLink } from 'react-router-dom';

import s from './toGoBack.module.css';
import getWindowSize from '../../hooks/useWResize';

const ToGoBack = () => {
  const viewPort = getWindowSize();

  return (
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
      {viewPort.width > 767 ? 'Вернуться на главную' : ''}
    </NavLink>
  );
};

export default ToGoBack;
