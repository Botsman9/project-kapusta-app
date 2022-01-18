import s from './BackgroundCont.module.css';

function BackgroundCont({ children }) {
  return (
    <>
      <div className={s.background}>{children}</div>
      <div className={s.kapusta}></div>
    </>
  );
}

export default BackgroundCont;
