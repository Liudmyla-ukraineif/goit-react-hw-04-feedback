import PropTypes from 'prop-types';
import css from "../Notification/Notification.module.css"

const Notification = ({message}) => {
  return <h2 className={css.textMessage}>{message}</h2>
}

export default Notification;

Notification.propType = {
  message:PropTypes.string,
}