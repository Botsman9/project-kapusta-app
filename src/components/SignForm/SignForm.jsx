import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './SignForm.module.scss';
import operations from '../../redux/auth/auth-operartions';

function SignForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [submited, setSubmited] = useState(false);
  const dispatch = useDispatch();
  const wrightEmail = email.match(
    /^([^-])([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{1,})$/i,
  );
  const wrightEmailLength = email.length >= 10;

  const inputChanged = () => {
    if (wrightEmail && wrightEmailLength) {
      setEmailValid(true);
    }

    if (password.length > 0) {
      setPasswordValid(true);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmited(true);
    if (wrightEmail && wrightEmailLength) setEmailValid(true);
    if (!wrightEmail || !wrightEmailLength) {
      alert(
        'Email не должен содержать дефис в начале, меньше 2 символов перед "@", а также длина Email должна быть более 10 символов',
      );
      setEmailValid(false);
    }
    if (password.length < 1) setPasswordValid(false);

    if (!wrightEmail || password.length < 1) return false;
    switch (e.nativeEvent.submitter.id) {
      case 'signIn':
        dispatch(operations.logIn({ email, password }));
        break;
      case 'signUp':
        dispatch(operations.register({ email, password }));
        break;

      default:
        break;
    }
    if (emailValid || passwordValid) return false;
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className={s.TitleWrapper}>
        <h1 className={s.HomeTitle}>
          Kapu<span className={s.dollar}>s</span>ta
        </h1>
        <h2 className={s.HomeSubTitle}>Smart Finance</h2>
      </div>
      <div className={s.FormContainer}>
        <form
          className={s.SignForm}
          onSubmit={handleSubmit}
          onChange={inputChanged}
          noValidate
        >
          <p className={s.GoogleTxt}>
            Вы можете авторизоваться с помощью Google Account:
          </p>
          <a
            href="https://kapusta-backend.goit.global/auth/google"
            className={s.GoogleBtn}
          >
            Google
          </a>
          <p>
            Или зайти с помощью e-mail и пароля, предварительно
            зарегистрировавшись:
          </p>
          <div className={s.inputWrapper}>
            <label id="mailLabel" htmlFor="email">
              Электронная почта:
            </label>
            <input
              type="email"
              name="email"
              value={email}
              minLength="10"
              maxLength="63"
              pattern="^([^-])([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{1,})$"
              placeholder="your@email.com"
              onChange={handleChange}
              className={s.SignInput}
              required
            ></input>
            {!emailValid && submited && (
              <p className={s.error}>это обязательное поле</p>
            )}
          </div>
          <div className={s.inputWrapper}>
            <label id="passLabel"> Пароль:</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Пароль"
              // pattern="([A-Za-z0-9])"
              onChange={handleChange}
              className={s.SignInput}
              required
            ></input>
            {!passwordValid && submited && (
              <p className={s.error}>это обязательное поле</p>
            )}
          </div>
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
    </>
  );
}

export default SignForm;
