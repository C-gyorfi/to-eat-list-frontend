import { GoogleLogin } from 'react-google-login';
import React from 'react';

const responseGoogle = (response) => {
  console.log(response);
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = props.handleLogin;
   }

  render = () => {
    return (
      <div className={`login-container`}>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Sign in with Google"
          onSuccess={this.handleLogin}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
    </div>
    );
  }
}

export default Login;
