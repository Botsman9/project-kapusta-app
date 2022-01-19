import { useState } from 'react';
import s from './SelectCategory.module.css';

const SelectCategory = props => {
  const { category, allCategories = [], setCategory, isExpense } = props;
  const [isActive, setIsActive] = useState(false);

  const isExpenses = !category && isExpense;
  const isIncomes = !category && !isExpense;
  return (
    <div className={s.celect}>
      <div
        tabIndex="0"
        className={s.celectBtn}
        onClick={e => setIsActive(!isActive)}
      >
        {isExpenses
          ? 'Категория товара'
          : isIncomes
          ? 'Категория дохода'
          : category}

        {}

        {!isActive ? (
          <svg
            className={s.crownSvg}
            width="12"
            height="7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m1 1 5 4 5-4" stroke="#C7CCDC" strokeWidth="2" />
          </svg>
        ) : (
          <svg
            className={s.crownSvg}
            width="12"
            height="7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1 6 5-4 5 4"
              stroke="#C7CCDC"
              strokeWidth="2"
              className="crownUp"
            />
          </svg>
        )}
      </div>
      {isActive && (
        <div className={s.celectContent}>
          {allCategories.map(value => (
            <div
              key={value}
              onClick={e => {
                setCategory(value);
                setIsActive(false);
              }}
              className={s.celectItem}
            >
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectCategory;
