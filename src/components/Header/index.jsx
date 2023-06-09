/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import {
  Container,
  Content,
  Navbar,
  CloseButton,
  ItemMenu,
  Item,
  Brand,
  InputSearching,
  HeaderButton,
  SingOut,
} from "./styles";
import theme from "../../styles/theme";

import { ExplorerIcon } from "../ExplorerIcon";
import { Input } from "../Input";

import Receipt from "../../assets/Receipt.svg";
import SignOut from "../../assets/SignOut.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

export function Header({ search }) {
  // const [count, setCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, signOut } = useAuth();
  const isAdmin = user.admin;
  const navigate = useNavigate();

  function logout() {
    signOut();
    navigate("/");
  }

  function handleToHome() {
    navigate("/");
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function moveToReceipt() {
    navigate("/pedido");
  }

  function moveToNewDishes() {
    navigate("/novo-prato");
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 762) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <Content>
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
            {isAdmin ? (
              <Item onClick={moveToNewDishes}>
                <p>Novo prato</p>
              </Item>
            ) : null}
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
                fontSize="clamp(1.1rem,2.1rem,2.3rem )"
                width="2.0rem"
                onClick={handleToHome}
                cursor="pointer"
              />
              {isAdmin ? <span>admin</span> : ""}
            </Brand>
            <InputSearching>
              <Input
                searching
                onChange={(e) => search(e.target.value)}
                placeholder="Busque por pratos ou ingredientes"
              />
            </InputSearching>
            {isAdmin ? (
              <Button title="Novo Prato" onClick={moveToNewDishes} />
            ) : (
              <HeaderButton onClick={moveToReceipt}>
                <img src={Receipt} alt="" />
                <p>Pedidos</p>
                <span>(0)</span>
              </HeaderButton>
            )}
            <SingOut>
              <img src={SignOut} onClick={logout} />
            </SingOut>
          </>
        ) : (
          ""
        )}
      </Content>
    </Container>
  );
}
