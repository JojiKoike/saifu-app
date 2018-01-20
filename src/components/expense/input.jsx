import React from 'react';
import { DatePicker } from 'react-md';

export default class ExpenseInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    console.log(this.state.date);
    return (
      <DatePicker id="expense-date" label="支出日を選択" displayMode="portrait" />
    );
  }
}
