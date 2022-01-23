import { useState, useEffect } from 'react';
import ExpencesReportList from './ExpencesReportList';
import IncomesReportList from './IncomesReportList/IncomesReportList';
import s from './Report.module.css';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { useDispatch } from 'react-redux';
import { changeIsExpense } from '../../redux/statistics/statisticsSlice';

const Report = () => {
  const [change, setChange] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeIsExpense(change));
  }, [dispatch, change]);
  return (
    <>
      <div className={s.reportMain}>
        <div className={s.reportNav}>
          <ArrowBackIos
            style={{ height: '14px' }}
            className={s.reportArrow}
            onClick={() => setChange(!change)}
          />
          {change ? <span>Расходы</span> : <span>Доходы</span>}
          <ArrowForwardIos
            style={{ height: '14px' }}
            className={s.reportArrow}
            onClick={() => setChange(!change)}
          />
        </div>
        {change ? <ExpencesReportList /> : <IncomesReportList />}
      </div>
    </>
  );
};

export default Report;
