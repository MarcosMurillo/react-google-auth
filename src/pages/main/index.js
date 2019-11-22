import React from 'react';
import { GoogleLogout } from 'react-google-login';

import { Container, Content } from './styles';

export default function Main({ history }) {
  function Logout() {
    localStorage.removeItem('user');
    return history.push('/');
  }

  return (
    <Container>
      <Content>
        <span>Rota Main</span>
        <GoogleLogout
          clientId="405322608962-0h3g5f6r6ufuenk4dojt54ffrdhi9hsu.apps.googleusercontent.com"
          onLogoutSuccess={() => Logout()}
          render={renderProps => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Logout
            </button>
          )}
        />
      </Content>
    </Container>
  );
}
