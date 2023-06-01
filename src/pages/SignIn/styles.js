import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > label {
    width: 100%;
    text-align: start;
    padding: 1rem;
    font-size: 1.6rem;
  }

  > h1 {
    font-size: 48px;
  }
  
  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const StyledLink = styled(Link)`
margin-top: 3.2rem ;
  color: ${({ theme }) => theme.COLORS.LIGHT['100']};
  font-size: 1.4rem;
`