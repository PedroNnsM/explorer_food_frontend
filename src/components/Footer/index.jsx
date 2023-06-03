/* eslint-disable react/prop-types */
import theme from "../../styles/theme";
import { ExplorerIcon } from "../ExplorerIcon";
import { Container } from "./styles";

export function Footer({ ...rest }) {
  return (
    <Container {...rest}>
      <ExplorerIcon
        width={22}
        margin="0"
        color={theme.COLORS.LIGHT["700"]}
        fill={theme.COLORS.LIGHT["700"]}
        fontSize="1.3rem"
      />
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  );
}
