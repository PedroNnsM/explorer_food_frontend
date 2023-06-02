import { useState } from "react";

import {
  Container,
  Navbar,
  ItemMenu,
  Item,
  InputSearching,
  ReceiptImg,
} from "./styles";
import theme from "../../styles/theme";

import { Input } from "../Input";
import { ExplorerIcon } from "../ExplorerIcon";
import Receipt from "../../assets/Receipt.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [count, setCount] = useState("0");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, signOut } = useAuth();
  const isAdmin = user.admin;
  const navigate = useNavigate;

  function logout() {
    signOut();
    navigate("/");
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  function moveToReceipt() {
    navigate("/receipt");
  }
  function countReceipt() {
    setCount(count + 1);
  }

  console.log(isAdmin);
  return (
    <Container>
      <Navbar>
        {!isMenuOpen ? (
          <GiHamburgerMenu size={24} onClick={toggleMenu} />
        ) : (
          <AiOutlineClose size={24} onClick={toggleMenu} />
        )}
        <ItemMenu isOpen={isMenuOpen}>
          <Input placeholder="Busque por pratos ou ingredientes" searching />
          <Item onClick={logout}>
            <p>Sair</p>
          </Item>
        </ItemMenu>
      </Navbar>
      {!isMenuOpen ? (
        <>
          <ExplorerIcon
            fill={theme.COLORS.CAKE["100"]}
            color={theme.COLORS.LIGHT["100"]}
            margin="0"
            fontSize="2.1rem"
            width="2.0rem"
          />
          <InputSearching>
            <Input searching />
          </InputSearching>
          <ReceiptImg onClick={moveToReceipt}>
            <img src={Receipt} alt="" />
            <p>Pedidos</p>
            <span>({count})</span>
          </ReceiptImg>
        </>
      ) : (
        <h2>Menu</h2>
      )}
    </Container>
  );
}
