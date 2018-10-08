import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/auth/Signup';

class App extends Component {

  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    return (
      <div >
        <Switch>
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
