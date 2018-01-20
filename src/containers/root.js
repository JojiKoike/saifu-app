import React from 'react'
import {TabsContainer, Tabs, Tab} from 'react-md'
import ExpenseContainer from './expense.js'

export class RootContainer extends React.Component {

  render() {
    return (
      <TabsContainer colored>
        <Tabs tabId="simple-tab">
          <Tab label="Home">
            <h3>Home</h3>
          </Tab>
          <Tab label="収入">
            <h3>収入</h3>
          </Tab>
          <Tab label="支出">
            <ExpenseContainer />
          </Tab>
          <Tab label="資産">
            <h3>資産</h3>
          </Tab>
          <Tab label="負債">
            <h3>負債</h3>
          </Tab>
          <Tab label="移動">
            <h3>移動</h3>
          </Tab>
        </Tabs>
      </TabsContainer>
    )
  }
}
