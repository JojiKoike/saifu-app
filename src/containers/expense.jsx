import React from 'react';
import ExpenseInput from '../components/expense/input';

export default class ExpenseContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    console.log(this.state.date);
    return (
      <ExpenseInput />
    );
  }
}
