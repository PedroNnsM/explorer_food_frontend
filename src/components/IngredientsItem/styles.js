import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: fit-content;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT["600"]};
  color: ${({ theme }) => theme.COLORS.LIGHT["100"]};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT["500"]}` : "none"};

  border-radius: 5px;
  padding: 5px 16px;

  > button {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
  }
  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT["100"]};
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT["100"]};
  }

  > input {
    width: fit-content;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT["100"]};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT["500"]};
    }
  }
`;
