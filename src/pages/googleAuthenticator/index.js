import React, { useState } from 'react';
import Authenticator from '../../services/AuthenticatorController';

import { Container, Content } from './styles';

export default function GoogleAuthenticator({ history }) {
  const appInfo = JSON.parse(localStorage.user).fullName;
  const [pin, setPin] = useState();

  async function handleClickValidate() {
    const response = await Authenticator.validateMethod(pin);

    if (response.data === 'True') localStorage.setItem('secondFactor', 'true');
    history.push('/main');
  }

  return (
    <Container>
      <Content>
        <span>Validação Google Authenticator</span>
        <iframe
          src={`http://www.authenticatorApi.com/pair.aspx?AppName=ReactApp&AppInfo=${appInfo}&SecretCode=ReactApp299`}
          alt="QRauth"
        />
        <input
          type="text"
          placeholder="Informe o PIN do aplicativo"
          value={pin}
          onChange={e => setPin(e.target.value)}
        />
        <button
          onClick={() => {
            handleClickValidate();
          }}
        >
          Validar
        </button>
      </Content>
    </Container>
  );
}
