import React from 'react';
import { Container, Content } from './styles';
import { GoogleLogin } from 'react-google-login';
import { FaGoogle } from 'react-icons/fa';

const responseGoogle = response => {};

export default function Login() {
  return (
    <Container>
      <Content>
        <span>Logar com:</span>
        <GoogleLogin
          clientId="405322608962-0h3g5f6r6ufuenk4dojt54ffrdhi9hsu.apps.googleusercontent.com"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
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
