import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 172px;

  background-color: ${({ theme }) => theme.COLORS.DARK['900']};
  color: ${({ theme }) => theme.COLORS.LIGHT['500']};
  font-weight: 400;
  font-size: 16px;

  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;

  &::placeholder {

    color: ${({ theme }) => theme.COLORS.LIGHT['500']};
  }
`;
