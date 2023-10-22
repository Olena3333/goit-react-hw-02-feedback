import React from 'react';
import { StyledWrapper, StyledBtn } from './App.styled';

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
        <h1>Please leave feedback</h1>
        <div>
          <StyledBtn onClick={() => this.feedbackIncrement('good')}>
            Good
          </StyledBtn>
          <StyledBtn onClick={() => this.feedbackIncrement('neutral')}>
            Neutral
          </StyledBtn>
          <StyledBtn onClick={() => this.feedbackIncrement('bad')}>
            Bad
          </StyledBtn>
        </div>
        <h2>Statistic</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </StyledWrapper>
    );
  }
}
