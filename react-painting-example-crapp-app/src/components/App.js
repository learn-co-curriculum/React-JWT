import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Login from './Login';
import PaintingsContainer from './PaintingsContainer';
import PaintingsNew from './PaintingsNew';
import PaintingShow from './PaintingShow';

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: { user: {} }
    };
  }

  handleLogin(user){
    this.setState({
      auth: { user }
    })
    localStorage.setItem('token', user.token)
  }

  handleLogout(user){
    this.setState({
      auth: { user: {} }
    })
    localStorage.removeItem('token')
  }

  render() {
    return (
      <div>
        <Navbar
          color="green"
          title="Painterest"
          description="our app"
          icon="paint brush"
        />
        <div className="ui container grid">
          <div id="content" className="sixteen wide column">
            <Route exact path="/" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/paintings" component={PaintingsContainer} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;











            // <Route exact path="/" render={(routeProps) => {
              // return <About {...routeProps} handleLogin={(user) => {this.handleLogin(user)}}/>
            // }} />
