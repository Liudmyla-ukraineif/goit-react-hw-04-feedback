import PropTypes from 'prop-types';
import css from "../Statistics/Statistics.module.css";
import Notification from "../Notification/Notification";

const Statistics =({good, neutral, bad, total, positivePercentage})=> {
  return (
    <div>
      {(total ()> 0)
        ? <div className={css.statistic_block}>
          <p className={css.info} >Good: {good}</p>
          <p className={css.info} >Neutral: {neutral}</p>
          <p className={css.info} >Bad: {bad}</p>
          <p className={css.info} >Total: { total() }</p>
          <p className={css.info} >Positive feedback: {positivePercentage ()}%</p>
        </div>
        : <Notification message="There is no feedback"/>}
    </div>
  );
}

export default Statistics;

Statistics.propType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage:PropTypes.number,
}