import React from 'react';
import { Container, Content } from './styles';
import { GoogleLogin } from 'react-google-login';
import { FaGoogle } from 'react-icons/fa';

const responseGoogle = (response, history) => {
  localStorage.setItem(
    'user',
    JSON.stringify({
      fullName: response.profileObj.name,
      firstName: response.profileObj.givenName,
      email: response.profileObj.email,
      avatar: response.profileObj.imageUrl,
      googleId: response.profileObj.googleId,
      tokenId: response.tokenId,
    })
  );
  history.push('/2fa');
};

export default function Login({ history }) {
  return (
    <Container>
      <Content>
        <span>Logar com:</span>
        <GoogleLogin
          clientId="405322608962-0h3g5f6r6ufuenk4dojt54ffrdhi9hsu.apps.googleusercontent.com"
          onSuccess={response => responseGoogle(response, history)}
          onFailure={response => responseGoogle(response, history)}
          cookiePolicy={'single_host_origin'}
          render={renderProps => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <FaGoogle className="icon" color="#FFF" /> Google Account
            </button>
          )}
        />
      </Content>
    </Container>
  );
}
