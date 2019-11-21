import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { FaSpinner } from 'react-icons/fa';
import {Container, Content} from './styles'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

function handleSubmit() {
  return null
}

export default function Login() {
  const [loading, setLoading] = useState(false)

  return (
    <Container>
      <Content>
        <h1>Login</h1>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Insira seu e-mail" />
          <Input
            name="password"
            type="password"
            placeholder="Sua senha secreta"
          />
          <button disabled={loading} type="submit">
            {loading ? <FaSpinner color="#FFF" /> : 'Sign In'}
          </button>
        </Form>
        <Link to="/register">Quero me cadastrar gratuitamente</Link>
    </Content>
    </Container>
  )
}