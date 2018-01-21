import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs, { Tab } from 'material-ui/Tabs';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import ExpenseContainer from './expense';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class RootContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  handleTabChange = (event, value) => {
    this.setState({ index: value });
  }

  render() {
    const { classes } = this.props;
    const { index } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={index} onChange={this.handleTabChange}>
            <Tab label="Home" />
            <Tab label="収入" />
            <Tab label="支出" />
          </Tabs>
        </AppBar>
        { index === 0 && <p>Home</p>}
        { index === 1 && <p>収入</p>}
        { index === 2 && <ExpenseContainer />}
      </div>
    );
  }
}
RootContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RootContainer);
