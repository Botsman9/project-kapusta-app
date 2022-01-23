import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AddDataForm from '../../../components/transactions/AddDataForm/AddDataForm';
import userSelectors from '../../../redux/user/userSelectors';

const MobileFormPage = () => {
  const currentTransaction = useSelector(userSelectors.getCurrentTransaction);
  return (
    <div>
      <div>
        <NavLink
          to={
            currentTransaction
              ? `/transactions/${currentTransaction}`
              : '/transactions'
          }
        >
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
        </NavLink>
      </div>
      <AddDataForm />
    </div>
  );
};

export default MobileFormPage;
