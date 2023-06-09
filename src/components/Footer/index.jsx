/* eslint-disable react/prop-types */
import theme from "../../styles/theme";
import { ExplorerIcon } from "../ExplorerIcon";
import { Container,Content  } from "./styles";

export function Footer({ ...rest }) {
  return (
    <Container {...rest}>
      <Content>
        <ExplorerIcon
          width={22}
          margin="0"
          color={theme.COLORS.LIGHT["700"]}
          fill={theme.COLORS.LIGHT["700"]}
          fontSize="1.3rem"
          cursor='default'
        />
        <p>© 2023 - Todos os direitos reservados.</p>
      </Content>
    </Container>
  );
}
