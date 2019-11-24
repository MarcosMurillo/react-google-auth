import React from 'react';
import { Container, Text, Content, Line } from './styles';
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
    })
  );
  localStorage.setItem('secondFactor', 'false');
  console.log(response);
  history.push('/2fa');
};

export default function Login({ history }) {
  return (
    <Container>
      <Content>
        <Text>Acessar com:</Text>
        <Line />
        <GoogleLogin
          clientId="405322608962-0h3g5f6r6ufuenk4dojt54ffrdhi9hsu.apps.googleusercontent.com"
          onSuccess={response => responseGoogle(response, history)}
          onFailure={response => responseGoogle(response, history)}
          cookiePolicy={'single_host_origin'}
          render={renderProps => (
            <button
              type="button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <FaGoogle className="icon" color="#fafafa" /> Google Account
            </button>
          )}
        />
      </Content>
    </Container>
  );
}
