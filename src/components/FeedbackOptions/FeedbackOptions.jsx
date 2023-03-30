import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackStatistics =({options, onLeaveFeedback}) =>{  
  return (
    <div className={css.blockBtn}>
      {Object.keys(options).map(key => <button type='button' key={key} name={key} className={css.btn} onClick={onLeaveFeedback}>{key}</button>)}  
    </div>
    )
  }

export default FeedbackStatistics;

FeedbackStatistics.propType = {
  options: PropTypes.objectOf({
    key: PropTypes.string.isRequired,
  }),
  onLeaveFeedback: PropTypes.func,
}