import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${theme.COLORS.DARK["700"]};

  > h2 {
    font-size: 2.4rem;
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  width: 90%;
  height: 11.4rem;
  padding: 5.4rem 2.8rem 2.4rem;

  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.SIZE.MEDIUM}) {
    margin: 0;
    padding: 5.4rem 0 2.8rem;
  }
`;

export const Navbar = styled.div`
  @media (min-width: ${({ theme }) => theme.SIZE.MEDIUM}) {
    display: none;
  }
`;

export const CloseButton = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  > h3 {
    font-size: 24px;
  }
`;

export const ItemMenu = styled.div`
  position: fixed;
  top: 11.4rem;
  bottom: 60px;
  left: 0;
  z-index: 999;

  width: 100%;
  margin: 0 auto;
  padding: 2rem;

  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 3.6rem;

  list-style: none;

  background-color: ${({ theme }) => theme.COLORS.DARK["400"]};

  @media (min-width: ${({ theme }) => theme.SIZE.MEDIUM}) {
    display: none;
  }
`;

export const Item = styled.div`
  margin-bottom: 10px;
  padding: 8px;

  font-size: 2.4rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT["700"]};

  > p {
    font: ${({ theme }) => theme.FONTS.TEXT};
    font-weight: lighter;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  > span {
    color: ${({ theme }) => theme.COLORS.CAKE["200"]};
  }
`;

export const InputSearching = styled.div`
  width: 32%;

  display: none;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.SIZE.MEDIUM}) {
    display: block;
  }

  @media (min-width: ${({ theme }) => theme.SIZE.LARGE}) {
    width: 45%;
  }
`;
export const HeaderButton = styled.div`
  cursor: pointer;
  > p {
    display: none;
  }

  > span {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.SIZE.MEDIUM}) {
    width: 21.6rem;
    height: 56px;
    padding: 17px 32px;

    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;

    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.TOMATO["100"]};

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

export const SingOut = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.SIZE.MEDIUM}) {
    display: block;
  }
`;
