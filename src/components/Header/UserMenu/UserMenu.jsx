import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyModal from '../../UI/modal/MyModal';
import operations from '../../../redux/auth/auth-operartions';
import group42 from '../../../imges/svg/group42.svg';
import line from '../../../imges/svg/line.svg';
import classes from './UserMenu.module.css';

const UserMenu = () => {
  const email = useSelector(state => state.user.email);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = e => setIsOpenModal(!isOpenModal);

  useEffect(() => {
    const getUserName = email => {
      if (!email) return;
      const str = email;
      const position = str.indexOf('@');
      const name = str.slice(0, position);
      return name;
    };

    setName(getUserName(email));
  }, [email]);

  return (
    <div className={classes.container}>
      <span>
        <img src={group42} alt="icon" className={classes.icon} />
      </span>
      <p>{`Wellcome ${name ? name : 'User'}`}</p>
      <span>
        <img src={line} alt="icon" className={classes.iconLine} />
      </span>
      <span onClick={() => toggleModal()} className={classes.exit}>
        Выйти
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

export default UserMenu;
//dispatch(operations.logOut())
