import s from './modalBalance.css';

const ModalBalance = ({ onClose }) => {
  const handleClickWindow = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={s.commentBubble} onClick={handleClickWindow}>
      Привет! Для начала работы внеси текущий баланс своего счета!
      <p className={s.bubbleText}>
        Ты не можешь тратить деньги пока их у тебя нет :)
      </p>
      <h6 className={s.prompt}>Кликни на меня, что бы закрыть</h6>
    </div>
  );
};

export default ModalBalance;
