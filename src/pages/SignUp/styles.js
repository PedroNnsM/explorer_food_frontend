import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    display: none;
    font-size: 3.2rem;
    margin-bottom: 3.2rem;
  }

  > a {
    text-decoration: none;
  }

  @media (min-width: ${({ theme }) => theme.SIZE.MEDIUM}) {
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
    text-align: start;
    padding: 1rem;
    font-size: 1.6rem;
  }
  @media (min-width: 767px) {
    width: 34.8rem;
    }
`;

export const StyledLink = styled(Link)`
  margin-top: 3.2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT["100"]};
  font-size: 1.4rem;
  width: 31.6rem;
`;
