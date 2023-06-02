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
  > h2 {
    font-size: 2.4rem;
  }
`;

export const Navbar = styled.div`
  @media (min-width: ${({ theme }) => theme.SIZE.MEDIUM}) {
    display: none;
  }
`;
export const ItemMenu = styled.div`
  width: 100%;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 3.6rem;
  margin: 0 auto;
  padding: 2rem;
  position: fixed;
  top: 11.4rem;
  list-style: none;
  left: 0;
  bottom: 60px;
  z-index: 999;
  @media (min-width: ${({ theme }) => theme.SIZE.MEDIUM}) {
    display: none;
  }
`;

export const Item = styled.div`
  margin-bottom: 10px;
  font-size: 2.4rem;
  padding: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT["700"]};
  > p {
    font: ${({ theme }) => theme.FONTS.TEXT};
    font-weight: lighter;
  }
`;
export const InputSearching = styled.div`
  display: none;
  width: 50%;
  @media (min-width: ${({ theme }) => theme.SIZE.MEDIUM}) {
    display: block;
  }
`;

export const ReceiptImg = styled.div`
  > p {
    display: none;
  }
  > span {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.SIZE.MEDIUM}) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.TOMATO["100"]};
    padding: 8px 16px;
    > p {
      display: block;
      font-size: 1.4rem;
    }
    > span {
      display: block;
      font-size: 1.4rem;
    }
  }
`;
