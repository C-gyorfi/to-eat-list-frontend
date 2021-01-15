import './App.css';
import React from 'react';
import FoodList from './FoodList/FoodList.js'
import 'antd/dist/antd.css';
import NewItem from './NewItem/NewItem';
import Login from './Auth/Login';
import Logout from './Auth/Logout';

class App extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {loggedIn: false};
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogin() {
    this.setState({
      loggedIn: true
    })
    console.log("LOGGEDIN:::", this.state.loggedIn)
  }

  handleLogout() {
    this.setState({
      loggedIn: false
    })
    console.log("LOGGEDIN:::", this.state.loggedIn)
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <div className="App">
          <header className="App-header">
            <h1>To Eat List 🦑🥒🍚🥢</h1>
            <Logout handleLogout = {this.handleLogout} />
          </header>
          <NewItem />
          <FoodList />
        </div>
      );
    } else {
      return(
        <div className="App">
          <h1>Welcome 👋</h1>
          <Login handleLogin = {this.handleLogin} />
        </div>
      );
    }
  }
}

export default App;
