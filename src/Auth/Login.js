import { GoogleLogin } from 'react-google-login';
import React from 'react';
import { message } from 'antd';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = props.handleLogin;
   }

   showFailureMessage = (response) => {
    message.error("Something went wrong: " + response.message + " , try again...");
  }

  render = () => {
    return (
      <div className={`login-container`}>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Sign in with Google"
          onSuccess={this.handleLogin}
          onFailure={this.showFailureMessage}
          cookiePolicy={'single_host_origin'}
        />
    </div>
    );
  }
}

export default Login;
