import s from './ReportAmount.module.css';
import { useSelector } from 'react-redux';
import statisticsSelectors from '../../../redux/statistics/statisticsSelectors';

const ReportAmount = () => {
  const incomesTotal = useSelector(statisticsSelectors.getIncomeMonthTotal);
  const expenseTotal = useSelector(statisticsSelectors.getExpenseMonthTotal);
  return (
    <section className={`${s.section} ${s.sectionReportAmount}`}>
      <ul className={s.reportAmount}>
        <li className={s.reportAmountItem}>
          <p className={s.amountCategory}>Расходы:</p>
          <span className={`${s.value} ${s.valueExpence}`}>
            - {expenseTotal} грн.
          </span>
        </li>
        <li className={s.reportAmountItem}>
          <p className={s.amountCategory}>Доходы:</p>
          <span className={`${s.value} ${s.valueIncome}`}>
            + {incomesTotal} грн.
          </span>
        </li>
      </ul>
    </section>
  );
};

export default ReportAmount;
