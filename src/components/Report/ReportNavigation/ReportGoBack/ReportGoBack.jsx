import WestIcon from '@mui/icons-material/West';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './ReportGoBack.module.css';

const ReportGoBack = () => {
  window.addEventListener(
    `resize`,
    event => {
      setWidth(event.target.innerWidth);
    },
    false,
  );

  const [width, setWidth] = useState(window.innerWidth);

  return (
    <div className={s.reportBack}>
      <Link to={'/day-report'} className={s.goToReport} style={{}}>
        <WestIcon
          className={s.westIcon}
          style={{ heigth: '24px', fill: '#FF751D' }}
        />
        {width > 767 ? (
          <span className={s.backTitle}>Вернуться на главную</span>
        ) : (
          ''
        )}
      </Link>
    </div>
  );
};

export default ReportGoBack;
