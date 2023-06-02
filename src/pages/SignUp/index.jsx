import { useState } from "react";

import { useNavigate } from "react-router-dom";
import theme from "../../styles/theme";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import { Container, Form, Fildset, StyledLink } from "./styles";
import { ExplorerIcon } from "../../components/ExplorerIcon";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }
    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("usuario cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Nao foi possivel cadastrar");
        }
      });
  }

  return (
    <Container>
      <ExplorerIcon
        fill={theme.COLORS.CAKE["100"]}
        color={theme.COLORS.LIGHT["100"]}
        marginBotton="5rem"
        width="43px"
      />
      <Form>
        <h1>Crie sua conta</h1>

        <Fildset>
          <label htmlFor="name">Seu nome</label>
          <Input
            placeholder="Digite seu nome"
            type="text"
            id={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Fildset>

        <Fildset>
          <label htmlFor="email">Email</label>
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            id={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Fildset>
        <Fildset>
          <label htmlFor="password">Senha</label>
          <Input
            placeholder="Senha"
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Fildset>

        <Button title="Cadastrar" onClick={handleSignUp} />

        <StyledLink to="/">Voltar para o login</StyledLink>
      </Form>
    </Container>
  );
}
