import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: ${(props) => props.marginBotton};

  margin-left: auto;
  margin-right: auto;
  font-size: 3.5rem;
  display: flex;
  gap: 1.5rem;
`;
export const IconText = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
`;