import { useState } from "react";
import { Container, Form } from "./styles";
import theme from "../../styles/theme";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ExplorerIcon } from "../../components/ExplorerIcon";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <ExplorerIcon
          fill={theme.COLORS.CAKE["100"]}
          color={theme.COLORS.LIGHT["100"]}
        />
        <h2>Faça seu Login</h2>

        <Input
          placeholder="Exemplo: exemplo@exemplo.com.br"
          id={email}
          label='E-mail'
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Entrar" to="/register" onClick={handleSignIn} />

        <Link to="/register">Criar conta</Link>
      </Form>
    </Container>
  );
}
