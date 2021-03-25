import './App.css';
import React, { useState } from 'react';
import FoodList from './FoodList/FoodList.js'
import 'antd/dist/antd.css';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import Cookies from 'universal-cookie';

function App() {
  const [user, setUser] = useState({ email: new Cookies().get('user') });

  const handleLogin = (response) => {
    const cookies = new Cookies();
    let userEmail = response.profileObj.email;
    // Temp fix to lock app from public 
    if (process.env.REACT_APP_ALLOWED_USERS.split(" ").includes(userEmail)) {
      cookies.set('user', userEmail, { path: '/' });
      setUser({ email: userEmail });
    }
  }
  
  const handleLogout = ()=> {
    new Cookies().remove('user', { path: '/' });
    setUser({ email: null })
  }

  if (user.email) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To Eat List 🦑🥒🍚🥢</h1>
          <Logout handleLogout = {handleLogout} />
        </header>
        <FoodList />
      </div>
    )
  } else {
    return(
      <div className="App">
        <h1>Welcome 👋</h1>
        <Login handleLogin = {handleLogin} />
      </div>
    );
  }
}

export default App
