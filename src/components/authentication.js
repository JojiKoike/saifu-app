import React from 'react'
import {Grid, Cell, TextField, Button} from 'react-md'

export class Login extends React.Component {

  onClickLogin() {
    // Dummy Implements
    console.log('LoginTest')
  }

  render() {
    return (
      <Grid className="login">
        <Cell size={4} desktopOffset={4} tabletOffset={2}>
          <h1 className="md-text-center">Saifu Login</h1>
          <TextField
            id="userid-input"
            label="Enter your Saifu UserID"
            lineDirection="center"
            placeholder="UserID"
          />
          <TextField
            id="password-input"
            label="Enter your password"
            type="password"
          />
        </Cell>
        <Cell size={4} desktopOffset={4} tabletOffset={2}>
          <div className="md-text-center">
            <Button raised primary onClick={() => this.onClickLogin()}>
              Login
            </Button>
          </div>
        </Cell>
      </Grid>
    );
  }
}
