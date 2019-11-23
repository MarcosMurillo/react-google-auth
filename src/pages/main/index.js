import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { FaGithub } from 'react-icons/fa';
import {
  frameWork,
  styledComponents,
  reactGoogleLogin,
  authenticatorApi,
  esLint,
} from './Text';
import {
  Container,
  Text,
  Header,
  Content,
  User,
  Link,
  Project,
  Line,
} from './styles';

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
        <Link
          href="https://github.com/MarcosMurillo/react-google-auth"
          target="_blank"
        >
          <button>
            <FaGithub className="icon" color="#fafafa" />
            Accesar projeto
          </button>
        </Link>
      </Header>
      <Content>
        <User>
          <img src={avatar} alt="avatar" />
          <span>{fullName} </span>
          <span>{email}</span>
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
        </User>
        <Project>
          <Text color="#9c9c9c">Tecnologias utilizadas</Text>
          <Line />

          <Text color="#9c9c9c">Framework</Text>
          <p>{frameWork}</p>

          <Text color="#9c9c9c">Styled components</Text>
          <p>{styledComponents}</p>

          <Text color="#9c9c9c">React google login</Text>
          <p>{reactGoogleLogin}</p>

          <Text color="#9c9c9c">Authenticator api</Text>
          <p>{authenticatorApi}</p>

          <Text color="#9c9c9c">Eslint</Text>
          <p>{esLint}</p>
        </Project>
      </Content>
    </Container>
  );
}
