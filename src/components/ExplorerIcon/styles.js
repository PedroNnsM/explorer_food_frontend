import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: ${(props) => props.marginBotton};
  margin-left: auto;
  margin-right: auto;
  margin: ${(props) => props.margin};
  cursor: ${(props) => props.cursor };

  display: flex;
  align-items: center;
  gap: 8px;
  
  font-size: 3.5rem;
`;
export const IconText = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
`;
