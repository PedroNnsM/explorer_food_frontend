import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${theme.COLORS.DARK["700"]};

  p {
    color: ${theme.COLORS.LIGHT["200"]};
    font-size: 1.2rem;
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  width: 90%;
  padding: 2.7rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
