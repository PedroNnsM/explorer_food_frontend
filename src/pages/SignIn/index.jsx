import { useState } from "react";
import { Container, Form, StyledLink } from "./styles";
import theme from "../../styles/theme";

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
          marginBotton="5rem"
        />
        {/* <h2>Faça seu Login</h2> */}

        <label htmlFor="email">Email</label>
        <Input
          placeholder="Exemplo: exemplo@exemplo.com.br"
          id={email}
          label="E-mail"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Senha</label>
        <Input
          placeholder="Senha"
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Entrar" to="/register" onClick={handleSignIn} />

        <StyledLink to="/register">Criar conta</StyledLink>
      </Form>
    </Container>
  );
}
