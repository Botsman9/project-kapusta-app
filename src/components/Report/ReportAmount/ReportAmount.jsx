import s from './ReportAmount.module.css';
import { useSelector } from 'react-redux';

const ReportAmount = () => {
  const incomesTotal = useSelector(state => state.statistics.incomes.total);
  const expenseTotal = useSelector(state => state.statistics.expense.total);
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
