import React from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../../redux/auth/auth-operartions';
import classes from './UserMenuMob.module.css';
import group42 from '../../../imges/svg/group42.svg';
import logout from '../../../imges/svg/logout.svg';

const UserMenuMob = () => {
  const dispath = useDispatch();

  return (
    <div className={classes.container}>
      <span>
        <img src={group42} alt="icon" className={classes.icon} />
      </span>
      <span onClick={() => dispath(operations.logOut())}>
        <img src={logout} alt="icon" className={classes.iconExit} />
      </span>
    </div>
  );
};

export default UserMenuMob;
