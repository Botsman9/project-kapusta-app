import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import MyModal from '../../UI/modal/MyModal';
import operations from '../../../redux/auth/auth-operartions';
import classes from './UserMenuMob.module.css';
import group42 from '../../../imges/svg/group42.svg';
import logout from '../../../imges/svg/logout.svg';

const UserMenuMob = () => {
  const dispatch = useDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = e => setIsOpenModal(!isOpenModal);

  return (
    <div className={classes.container}>
      <span>
        <img src={group42} alt="icon" className={classes.icon} />
      </span>
      <span onClick={() => toggleModal()}>
        <img src={logout} alt="icon" className={classes.iconExit} />
      </span>

      {isOpenModal && (
        <MyModal
          toggleModal={toggleModal}
          onClick={() => dispatch(operations.logOut())}
        >
          Вы действительно хотите выйти?
        </MyModal>
      )}
    </div>
  );
};

export default UserMenuMob;
