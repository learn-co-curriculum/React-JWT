import React from 'react';
import Api from '../services/api'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }
  handleInputChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin(e){
  }

  render(){
    return (
      <div>
        <h3>Sign in</h3>
        <form>
          <input name={'username'} onChange={(e) => this.handleInputChange(e)} value={this.state.username} />
          <input name={'password'} onChange={(e) => this.handleInputChange(e)} value={this.state.password} />
          <input type='submit' value='login' />
        </form>
      </div>
    );
  }
}

export default Login;
