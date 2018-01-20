import React from 'react'
import {DatePicker} from 'react-md'

export default class ExpenseInput extends React.Component {
  render() {
    return (
      <div className="inputexpense">
            <DatePicker
                    id="expense-date"
                    label="支出日を選択"
                    displayMode="portrait"
                    />

      </div>
    );
  }
}
