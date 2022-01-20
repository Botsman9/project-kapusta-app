import { useState } from 'react';
import Container from '../../components/Container/Container';
import ExpencesReportList from './ExpencesReportList';
import IncomesReportList from './IncomesReportList/IncomesReportList';
import s from './Report.module.css';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';

const Report = () => {
  const [change, setChange] = useState(true);

  return (
    <Container>
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
    </Container>
  );
};

export default Report;
