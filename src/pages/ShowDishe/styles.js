import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  height: 100vh;

  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow-y: auto;

  > main {
    max-width: 1120px;
    width: 80%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: 26.4rem;
    height: 26.4rem;
    margin: 16px 26px;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const Ingredients = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 20px;

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT["100"]};
    text-align: center;
    pad: 4px 8px;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;

    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.DARK["1000"]};
  }
`;
