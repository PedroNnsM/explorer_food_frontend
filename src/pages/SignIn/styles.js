import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const Form = styled.form`
  width: 31.6rem;
  margin: 0 auto;

  display: flex;
  gap: 3.2rem;
  align-items: center;
  text-align: center;
  flex-direction: column;
  justify-content: center;

  > h1 {
    display: none;
    margin-bottom: 3.2rem;
  
    font-size: 3.2rem;
  }

  > a {
    text-decoration: none;
  }

  @media (min-width: 767px) {
    width: 44.4rem;
    padding: 64px;

    background-color: ${({ theme }) => theme.COLORS.DARK["700"]};
  
    > h1 {
      display: block;
    }
  }
`;

export const Fildset = styled.div`
  width: 31.6rem;
  
  display: flex;
  flex-direction: column;

  > label {
    width: 100%;
    padding: 1rem;
  
    text-align: start;
    font-size: 1.6rem;
  }

  @media (min-width: ${({ theme }) => theme.SIZE.MEDIUM}) {
    width: 34.8rem;
  }
`;

export const StyledLink = styled(Link)`
  width: 31.6rem;
  margin-top: 3.2rem;
  
  color: ${({ theme }) => theme.COLORS.LIGHT["100"]};
  font-size: 1.4rem;
`;
