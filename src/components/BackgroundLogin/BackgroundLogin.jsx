import s from './BackgroundLogin.module.css';

function BackgroundLogin({ children }) {
  return (
    <>
      <div className={s.backgroundLogin}>{children}</div>
      <div className={s.kapustaLogin}></div>
    </>
  );
}

export default BackgroundLogin;
