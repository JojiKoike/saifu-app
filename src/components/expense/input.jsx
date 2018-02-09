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
      <form>
        <label htmlFor="expenseDate" >
          支払日：
          <TextField id="expenseDate" type="date" />
        </label>
      </form>
    );
  }
}
