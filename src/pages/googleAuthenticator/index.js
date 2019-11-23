import React, { useState } from 'react';
import Authenticator from '../../services/AuthenticatorController';

import { Container, Content } from './styles';

export default function GoogleAuthenticator({ history }) {
  const [pin, setPin] = useState('');
  const appInfo = JSON.parse(localStorage.user).fullName;

  async function handleClickValidate() {
    const response = await Authenticator.validateMethod(pin);
    if (pin === '') return alert('Informe o código do google authenticator');

    if (response.data === 'True') {
      localStorage.setItem('secondFactor', 'true');
      history.push('/main');
    } else {
      alert('Código inválido');
      setPin('');
    }
  }

  return (
    <Container>
      <Content>
        <span>Validação Google Authenticator</span>
        <iframe
          title="QRauth"
          src={`https://www.authenticatorApi.com/pair.aspx?AppName=ReactApp&AppInfo=${appInfo}&SecretCode=ReactApp299`}
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
