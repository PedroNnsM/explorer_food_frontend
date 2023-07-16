import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { SlArrowLeft } from "react-icons/sl";

export function ButtonText() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Container onClick={handleBack}>
      <SlArrowLeft /> <span>Voltar</span>
    </Container>
  );
}
