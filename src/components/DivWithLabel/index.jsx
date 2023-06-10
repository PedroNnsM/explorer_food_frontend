/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function DivWithLabel({ title, children }) {
  return (
    <Container>
      <label>{title}</label>
      {children}
    </Container>
  );
}
