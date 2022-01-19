import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './SignForm.module.scss';
import operations from '../../redux/auth/auth-operartions';

function SignForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [formValid, setFormValid] = useState(false);
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
    console.log(`submit`, e.nativeEvent.submitter.id);
    switch (e.nativeEvent.submitter.id) {
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
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.FormContainer}>
      <form className={s.SignForm} onSubmit={handleSubmit}>
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
          minLength="10"
          maxLength="63"
          pattern="([^-])([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
          placeholder="your@email.com"
          onChange={handleChange}
          className={s.SignInput}
          required
        ></input>
        <p className={s.error} id="emaiInlvalid">
          это обязательное поле
        </p>
        <label>Пароль:</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="••••••••"
          pattern="([A-Za-z0-9])"
          onChange={handleChange}
          className={s.SignInput}
          required
        ></input>
        <p className={s.error} id="passInvalid">
          это обязательное поле
        </p>
        <ul className={s.SignBtnsWrap}>
          <li>
            <button type="submit" className={s.SignInBtn} id="signIn">
              войти
            </button>
          </li>
          <li>
            <button type="submit" className={s.SignUpBtn} id="signUp">
              регистрация
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default SignForm;
