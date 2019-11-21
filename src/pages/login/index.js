import React, { useState } from "react";
import { Form } from "@rocketseat/unform";
import * as Yup from "yup";
import { FaGoogle } from "react-icons/fa";
import { Container, Content } from "./styles";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required")
});

export default function Login() {
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    return setLoading(true);
  }

  return (
    <Container>
      <Content>
        <h1>Login</h1>
        <Form schema={schema} onSubmit={handleSubmit}>
          {/* <Input name="email" type="email" placeholder="Insira seu e-mail" />
          <Input
            name="password"
            type="password"
            placeholder="Sua senha secreta"
          /> */}
          <button disabled={loading} type="submit">
            <FaGoogle className="google-account" /> {"Google Account"}
          </button>
        </Form>
      </Content>
    </Container>
  );
}
