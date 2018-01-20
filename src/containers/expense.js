import React from 'react'

import ExpenseInput from '../components/expense/input.js'

export default class ExpenseContainer extends React.Component {
  render() {
    return (
      <div className="expenseContainer">
        <ExpenseInput />
      </div>
    );
  }
}
