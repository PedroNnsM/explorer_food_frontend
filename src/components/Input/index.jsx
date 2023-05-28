import { Container, Label } from "./styles";

// eslint-disable-next-line react/prop-types
export function Input({ id, label, ...rest }) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <input id={id} {...rest} />
    </Container>
  );
}
