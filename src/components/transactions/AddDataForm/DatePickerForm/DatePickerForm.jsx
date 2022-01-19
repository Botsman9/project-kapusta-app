import { forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import * as userActions from '../../../../redux/user/userSlice';
import s from './DatePickerForm.module.css';

const DatePickerForm = ({ piker }) => {
  const dispatch = useDispatch();

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className={s.input} onClick={onClick} ref={ref}>
      <div className={s.wrapperSvg}>
        <svg
          width="20"
          height="20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 2h-1.3v-.3a.6.6 0 1 0-1.2 0v.4h-1.6v-.4a.6.6 0 0 0-1.2 0v.4h-1.6v-.4a.6.6 0 1 0-1.2 0v.4H7.8v-.4a.6.6 0 0 0-1.2 0v.4H5v-.4a.6.6 0 0 0-1.2 0v.4H2.5A2.5 2.5 0 0 0 0 4.6v11.7c0 1.4 1.1 2.5 2.5 2.5h15c1.4 0 2.5-1 2.5-2.5V4.6C20 3.2 18.9 2 17.5 2Zm1.3 14.3c0 .8-.6 1.4-1.3 1.4h-15c-.7 0-1.3-.6-1.3-1.4V6.7h17.6v9.6Zm0-10.7H1.2v-1c0-.8.6-1.4 1.3-1.4h1.3v.3a.6.6 0 0 0 1.2 0v-.3h1.6v.3a.6.6 0 0 0 1.2 0v-.3h1.6v.3a.6.6 0 0 0 1.2 0v-.3h1.6v.3a.6.6 0 0 0 1.2 0v-.3H15v.3a.6.6 0 1 0 1.2 0v-.3h1.3c.7 0 1.3.6 1.3 1.4v1Z"
            fill="#52555F"
          />
          <path
            d="M6.5 8H4.2c-.3 0-.6.2-.6.6V11c0 .3.3.5.6.5h2.3c.4 0 .6-.2.6-.5V8.6c0-.4-.2-.6-.6-.6ZM6 10.4H5V9.2h1v1.2ZM11.2 8H8.8c-.3 0-.5.2-.5.6V11c0 .3.2.5.5.5h2.4c.3 0 .5-.2.5-.5V8.6c0-.4-.2-.6-.5-.6Zm-.6 2.4H9.4V9.2h1.2v1.2ZM15.8 8h-2.3c-.4 0-.6.2-.6.6V11c0 .3.2.5.6.5h2.3c.3 0 .6-.2.6-.5V8.6c0-.4-.3-.6-.6-.6Zm-.6 2.4H14V9.2h1v1.2ZM6.5 12.5H4.2c-.3 0-.6.3-.6.6v2.4c0 .3.3.6.6.6h2.3c.4 0 .6-.3.6-.6v-2.4c0-.3-.2-.6-.6-.6ZM6 15H5v-1.2h1v1.2ZM11.2 12.5H8.8c-.3 0-.5.3-.5.6v2.4c0 .3.2.6.5.6h2.4c.3 0 .5-.3.5-.6v-2.4c0-.3-.2-.6-.5-.6Zm-.6 2.4H9.4v-1.2h1.2v1.2ZM15.8 12.5h-2.3c-.4 0-.6.3-.6.6v2.4c0 .3.2.6.6.6h2.3c.3 0 .6-.3.6-.6v-2.4c0-.3-.3-.6-.6-.6Zm-.6 2.4H14v-1.2h1v1.2Z"
            fill="#52555F"
          />
        </svg>
      </div>
      {value}
    </div>
  ));

  return (
    <>
      <div className={s.wrraper}>
        {piker && (
          <ReactDatePicker
            selected={piker}
            dateFormat="dd.MM.y"
            onChange={date =>
              dispatch(userActions.changeCurrentDay(date.getTime()))
            }
            customInput={<ExampleCustomInput />}
            // calendarClassName={s.calendarDate}
          />
        )}
      </div>
    </>
  );
};

export default DatePickerForm;
