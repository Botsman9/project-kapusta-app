import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../../redux/auth/auth-operartions';
import group42 from '../../../imges/svg/group42.svg';
import line from '../../../imges/svg/line.svg';
import classes from './UserMenu.module.css';

const UserMenu = () => {
  const email = useSelector(state => state.user.email);
  const dispatch = useDispatch();

  const [name, setName] = useState('');

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
      <span
        onClick={() => dispatch(operations.logOut())}
        className={classes.exit}
      >
        Выйти
      </span>
    </div>
  );
};

export default UserMenu;
