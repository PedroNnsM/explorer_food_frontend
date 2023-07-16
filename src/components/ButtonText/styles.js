import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  width: 90%;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  cursor: default;

  > svg {
    cursor: pointer;
    width: 15px;
    height: 23px;
  }

  > span {
    cursor: pointer;
    font-size: 12px;
    font-weight: 700;
  }

  > h3 {
    font-size: 2.3rem;
    font-weight: 500;
  }
`;