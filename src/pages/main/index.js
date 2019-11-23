import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { Container, Text, Header, Content, Card, Link } from './styles';
import { FaGithub } from 'react-icons/fa';

export default function Main({ history }) {
  const avatar = JSON.parse(localStorage.user).avatar;
  const email = JSON.parse(localStorage.user).email;
  const fullName = JSON.parse(localStorage.user).fullName;
  const firstName = JSON.parse(localStorage.user).firstName;

  function Logout() {
    localStorage.removeItem('user');
    localStorage.setItem('secondFactor', 'false');
    return history.push('/');
  }

  return (
    <Container>
      <Header>
        <Text>
          {`Olá ${firstName}, vôce se autenticou com sua conta Google`}{' '}
        </Text>
        <GoogleLogout
          clientId="405322608962-0h3g5f6r6ufuenk4dojt54ffrdhi9hsu.apps.googleusercontent.com"
          onLogoutSuccess={() => Logout()}
          render={renderProps => (
            <button
              type="button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Logout
            </button>
          )}
        />
      </Header>
      <Content>
        <Card>
          <img src={avatar} alt="avatar" />
          <span>{fullName} </span>
          <span>{email}</span>
          <Link
            href="https://github.com/MarcosMurillo/react-google-auth"
            target="_blank"
          >
            <button>
              <FaGithub className="icon" color="#fafafa" />
              Accesar projeto
            </button>
          </Link>
        </Card>
      </Content>
    </Container>
  );
}
