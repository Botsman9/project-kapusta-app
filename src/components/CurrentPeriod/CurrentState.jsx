import s from './CurrentPeriod.module.css';
import { useLocation, Link } from 'react-router-dom';

export default function CurrentState({ router, children }) {
  const location = useLocation();
  return (
    <>
      <Link to={{ pathname: `${router}`, state: { from: location } }}>
        <div className={s.navigation}>{children}</div>
      </Link>
    </>
  );
}
