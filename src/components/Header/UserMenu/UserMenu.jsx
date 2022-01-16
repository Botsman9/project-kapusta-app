import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../../redux/auth/auth-operartions';
import group42 from '../../../imges/svg/group42.svg';
import line from '../../../imges/svg/line.svg';
import classes from './UserMenu.module.css';

const UserMenu = () => {
  const email = useSelector(state => state.auth.email);
  const dispath = useDispatch();

  const getUserName = email => {
    const str = email;
    const position = str.indexOf('@');
    const name = str.splice(position, 1);
    return name;
  };

  return (
    <div className={classes.container}>
      <span>
        <img src={group42} alt="icon" className={classes.icon} />
      </span>
      {/* <p>{getUserName(email)}</p> */}
      <p>UserName</p>
      <span>
        <img src={line} alt="icon" className={classes.iconLine} />
      </span>
      <span
        onClick={() => dispath(operations.logOut())}
        className={classes.exit}
      >
        Выйти
      </span>
    </div>
  );
};

export default UserMenu;
