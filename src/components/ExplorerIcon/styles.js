import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: ${(props) => props.marginBotton};
  margin-left: auto;
  margin-right: auto;
  margin: ${(props) => props.margin};

  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  font-size: 3.5rem;
`;
export const IconText = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
`;
