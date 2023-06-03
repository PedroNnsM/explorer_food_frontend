/* eslint-disable react/prop-types */
import { useState } from "react";

import {
  Container,
  Navbar,
  CloseButton,
  ItemMenu,
  Item,
  Brand,
  InputSearching,
  ReceiptImg,
  SingOut,
} from "./styles";
import theme from "../../styles/theme";

import { Input } from "../Input";
import { ExplorerIcon } from "../ExplorerIcon";
import Receipt from "../../assets/Receipt.svg";
import SignOut from "../../assets/SignOut.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function Header({ search }) {
  // const [count, setCount] = useState(0);
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

  console.log(isMenuOpen);
  return (
    <Container>
      <Navbar>
        {!isMenuOpen ? (
          <GiHamburgerMenu size={24} onClick={toggleMenu} />
        ) : (
          <CloseButton>
            <AiOutlineClose size={24} onClick={toggleMenu} /> <h3>Menu</h3>
          </CloseButton>
        )}
        <ItemMenu isOpen={isMenuOpen}>
          <Input
            placeholder="Busque por pratos ou ingredientes"
            searching
            onChange={(e) => search(e.target.value)}
          />
          <Item onClick={logout}>
            <p>Sair</p>
          </Item>
        </ItemMenu>
      </Navbar>
      {!isMenuOpen ? (
        <>
          <Brand>
            <ExplorerIcon
              fill={theme.COLORS.CAKE["100"]}
              color={theme.COLORS.LIGHT["100"]}
              margin="0"
              fontSize="2.1rem"
              width="2.0rem"
            />
            {isAdmin ? <span>Admin</span> : ""}
          </Brand>
          <InputSearching>
            <Input searching onChange={(e) => search(e.target.value)} />
          </InputSearching>
          <ReceiptImg onClick={moveToReceipt}>
            <img src={Receipt} alt="" />
            <p>Pedidos</p>
            <span>(0)</span>
          </ReceiptImg>
          <SingOut>
            <img src={SignOut} onClick={logout} />
          </SingOut>
        </>
      ) : (
        ""
      )}
    </Container>
  );
}
