import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 8px;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK["900"]};
  color: ${({ theme }) => theme.COLORS.LIGHT["100"]};

  border: 1px solid ${({ theme }) => theme.COLORS.DARK["900"]};
  border-radius: 5px;

  > svg {
    margin: 0 16px;
  }

  > input {
    width: 70%;
    height: 56px;
    padding: 12px;

    color: ${({ theme }) => theme.COLORS.LIGHT["100"]};
    background-color: transparent;
    
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT["500"]};
    }
  }
`;
