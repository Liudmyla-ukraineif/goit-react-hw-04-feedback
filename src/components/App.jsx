import React, { Component } from 'react';

import Section from "./Section/Section"
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = event => {
    const { name } = event.currentTarget;
    this.setState((pravState) => {
      return { [name]: pravState[name] + 1 }
    });
  }

  countTotalFeedback = ()=>{
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage =()=> {
    return +Math.round(this.state.good /this.countTotalFeedback() * 100)
  };

  render() { 
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage} />
        </Section>
    </div>
    );
  }
}

export default App;
