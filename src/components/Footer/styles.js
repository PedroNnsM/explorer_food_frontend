import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  padding: 2.7rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${theme.COLORS.DARK["700"]};
  > p {
    color: ${theme.COLORS.LIGHT["200"]};
    font-size: 1.2rem;
  }

  @media (min-width: ${({ theme }) => theme.SIZE.SMALL}) {
    padding: 2.7rem;
  }
  @media (min-width: ${({ theme }) => theme.SIZE.MEDIUM}) {
    padding: 2.7rem 3.4rem;
  }
  @media (min-width: ${({ theme }) => theme.SIZE.LARGE}) {
    padding: 2.7rem 11.4rem;
  }
`;
