import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import MyButton from '../button/MyButton';
import classes from './MyModal.module.css';
import icon from '../../../imges/svg/close.svg';

/*
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = e => {
    setIsOpen(!isOpen);
  };
*/

const modalRootRef = document.querySelector('#modal-root');

const MyModal = ({ toggleModal, onClick, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, []);

  const onEscPress = event => {
    if (event.code === 'Escape') {
      toggleModal();
    }
  };

  const onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  return createPortal(
    <>
      {
        <div onClick={onBackdropClick} className={classes.Overlay}>
          <div className={classes.Modal}>
            <button
              type="button"
              onClick={toggleModal}
              className={classes.closeBtn}
            >
              <img src={icon} alt="icon" className={classes.closeBtnImg} />
            </button>

            <div className={classes.content}>{children}</div>

            <div className={classes.OverlayBtns}>
              <MyButton
                onClick={() => {
                  toggleModal();
                  onClick();
                }}
                classCss="myAccentBtn"
              >
                да
              </MyButton>
              <MyButton onClick={toggleModal} classCss="myMinorBtn">
                Нет
              </MyButton>
            </div>
          </div>
        </div>
      }
    </>,
    modalRootRef,
  );
};

MyModal.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default MyModal;
