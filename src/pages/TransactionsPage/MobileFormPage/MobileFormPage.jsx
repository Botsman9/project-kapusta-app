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
          назад
        </NavLink>
      </div>
      <AddDataForm />
    </div>
  );
};

export default MobileFormPage;
