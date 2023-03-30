import { useState } from 'react';

import Section from "./Section/Section"
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";

export default function App(){

  const [good, setGood]=useState(0);
  const [neutral, setNeutral]=useState(0);
  const [bad, setBad]=useState(0);

  const optionsFeedback = { good, neutral, bad }

  const onLeaveFeedback = event => {
    switch (event.target.name){
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState +1);
        break;

      default:
        console.log('default');
    }
  };
  

  const countTotalFeedback = ()=>{
    return good + neutral + bad
  };

  
  const countPositiveFeedbackPercentage =()=> {
    return +Math.round(good /countTotalFeedback() * 100)
  };

  return(
    <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={optionsFeedback} onLeaveFeedback={onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage} />
        </Section>
    </div>

  )
}