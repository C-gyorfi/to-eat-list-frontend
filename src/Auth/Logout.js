import { GoogleLogout } from 'react-google-login';
import React from 'react';
import './Logout.css';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = props.handleLogout;
   }

  render = () => {
    return (
      <div className={`logout-container`}>
        <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={this.handleLogout}
        />
    </div>
    );
  }
}

export default Logout;
