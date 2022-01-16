import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './SignForm.module.css';
import operations from '../../redux/auth/auth-operartions';

function SignForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    switch (e.target.id) {
      case 'sign-google':
        break;
      case 'signIn':
        dispatch(operations.logIn({ email, password }));
        break;
      case 'signUp':
        dispatch(operations.register({ email, password }));
        break;

      default:
        break;
    }
    // reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.FormContainer}>
      <form className={s.SignForm} onClick={handleSubmit}>
        <p>Вы можете авторизоваться с помощью Google Account:</p>
        <button className={s.GoogleBtn} type="button" id="sign-google">
          Google
        </button>
        <p>
          Или зайти с помощью e-mail и пароля, предварительно
          зарегистрировавшись:
        </p>
        <label>Электронная почта:</label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="your@email.com"
          onChange={handleChange}
          className={s.SignInput}
        ></input>
        <label>Пароль:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          className={s.SignInput}
        ></input>
        <ul className={s.SignBtnsWrap}>
          <li>
            <button type="button" className={s.SignInBtn} id="signIn">
              войти
            </button>
          </li>
          <li>
            <button type="button" className={s.SignUpBtn} id="signUp">
              регистрация
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default SignForm;
