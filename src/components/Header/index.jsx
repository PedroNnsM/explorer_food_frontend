import { ExplorerIcon } from "../ExplorerIcon";
import { Container } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import Receipt from "../../assets/Receipt.svg"
import theme from "../../styles/theme";


export function Header() {
  return (
    <Container>
      <GiHamburgerMenu size={24} />
      <ExplorerIcon
        fill={theme.COLORS.CAKE["100"]}
        color={theme.COLORS.LIGHT["100"]}
        fontSize='2.1rem'
        width='2.0rem'
      />
      <img src={Receipt} alt="" />
    </Container>
  );
}
