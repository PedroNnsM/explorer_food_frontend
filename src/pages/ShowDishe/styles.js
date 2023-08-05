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
    width: 90%;
  }
`;
