import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.header`
  width: 100%;
  height: 11.4rem;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: ${({ isOpen }) => (!isOpen ? "start" : "space-between")};
  padding: 5.4rem 2.8rem 2.4rem;
  background-color: ${theme.COLORS.DARK["700"]};
`;

export const Navbar = styled.div``;
export const ItemMenu = styled.div`
  width: 100%;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem;
  position: fixed;
  top: 11.4rem;
  list-style: none;
  left: 0;
  bottom: 60px;
  z-index: 999;

`;

export const Item = styled.div`
  margin-bottom: 10px;
  font-size: 2.4rem;
  padding: 8px;
  border-bottom: 1 solid ${({ theme }) => theme.COLORS.LIGHT["300"]};
  > p {
    font: ${({ theme }) => theme.FONTS.TEXT};
  font-weight: lighter;
}

`;
