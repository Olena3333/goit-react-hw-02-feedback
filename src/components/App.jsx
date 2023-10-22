import React from 'react';
import { StyledWrapper, StyledBtn } from './App.styled';
import { Statistics } from '../components/Statistics/Statistics';
import { Section } from './Section/Section';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackIncrement = name => {
    // console.log(name);
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    // console.log(total);
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    // console.log(total);
    return Math.round((good / total) * 100) || 0;
  };

  render() {
    return (
      <StyledWrapper>
        <Section title="Please leave feedback"></Section>
        <StyledBtn>
          <button onClick={() => this.feedbackIncrement('good')}>Good</button>
          <button onClick={() => this.feedbackIncrement('neutral')}>
            Neutral
          </button>
          <button onClick={() => this.feedbackIncrement('bad')}>Bad</button>
        </StyledBtn>

        {/* <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.feedbackIncrement()}
          /> */}
        {this.state.good > 0 || this.state.neutral > 0 || this.state.bad ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </StyledWrapper>
    );
  }
}

//  return (
//    <StyledWrapper>
//      <h1>Please leave feedback</h1>
//      <div>
//        <StyledBtn onClick={() => this.feedbackIncrement('good')}>
//          Good
//        </StyledBtn>
//        <StyledBtn onClick={() => this.feedbackIncrement('neutral')}>
//          Neutral
//        </StyledBtn>
//        <StyledBtn onClick={() => this.feedbackIncrement('bad')}>Bad</StyledBtn>
//      </div>
//      <h2>Statistic</h2>
//      <p>Good: {this.state.good}</p>
//      <p>Neutral: {this.state.neutral}</p>
//      <p>Bad: {this.state.bad}</p>
//      <p>Total: {this.countTotalFeedback()}</p>
//      <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
//    </StyledWrapper>
//  );
