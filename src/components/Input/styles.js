import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK["900"]};
  color: ${({ theme }) => theme.COLORS.LIGHT["500"]};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.LIGHT["500"]};
    background-color: ${({ theme }) => theme.COLORS.DARK["900"]};
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT["500"]};
    }
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.COLORS.LIGHT["500"]};
  width: 100%;
  text-align: start;
`;
