import React from 'react';
import TextField from 'material-ui/TextField';

export default class ExpenseInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    console.log(this.state.date);
    return (
      <TextField type="date" />
    );
  }
}
