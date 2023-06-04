import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  margin-top: 16px;
  
  border: 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.TOMATO['100']};
  
  font-weight: 500;

  color: ${({ theme }) => theme.COLORS.LIGHT['100']};
  &:disabled {
    opacity: 0.5;
  }
`;
