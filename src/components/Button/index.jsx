import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function Button({ title, loading = false, forms = false , ...rest }) {
  return (
    <Container type="button" forms={forms} disabled={loading} {...rest}>
      {loading ? "Carregando..." : title}
      
    </Container>
  );
}
