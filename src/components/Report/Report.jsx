import { useState, useEffect } from 'react';
import ExpencesReportList from './ExpencesReportList';
import IncomesReportList from './IncomesReportList/IncomesReportList';
import s from './Report.module.css';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { useDispatch } from 'react-redux';
import { changeIsExpense } from '../../redux/statistics/statisticsSlice';

const Report = ({ setCategoryRender, categoryRender }) => {
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
            className={s.reportArrow}
            onClick={() => {
              setChange(!change);
              setCategoryRender(null);
            }}
          />
          {change ? (
            <span className={s.reportTitle}>Расходы</span>
          ) : (
            <span className={s.reportTitle}>Доходы</span>
          )}
          <ArrowForwardIos
            // style={{ height: '14px' }}
            className={s.reportArrow}
            onClick={() => {
              setChange(!change);
              setCategoryRender(null);
            }}
          />
        </div>
        {change ? (
          <ExpencesReportList
            setCategoryRender={setCategoryRender}
            categoryRender={categoryRender}
          />
        ) : (
          <IncomesReportList
            setCategoryRender={setCategoryRender}
            categoryRender={categoryRender}
          />
        )}
      </div>
    </>
  );
};

export default Report;
