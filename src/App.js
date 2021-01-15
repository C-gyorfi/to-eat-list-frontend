import './App.css';
import React from 'react';
import FoodList from './FoodList/FoodList.js'
import 'antd/dist/antd.css';
import NewItem from './NewItem/NewItem';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import Cookies from 'universal-cookie';

class App extends React.Component  {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogin(response) {
    const cookies = new Cookies();
    let userEmail = response.profileObj.email;
    // Temp fix to lock app from public 
    if (process.env.REACT_APP_ALLOWED_USERS.split(" ").includes(userEmail)) {
      cookies.set('user', userEmail, { path: '/' });
      this.forceUpdate()
    }
  }

  handleLogout() {
    const cookies = new Cookies();
    cookies.remove('user', { path: '/' });
    this.forceUpdate()
  }

  render() {
    if (new Cookies().get('user')) {
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
