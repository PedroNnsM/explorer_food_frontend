import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useAuth } from "../../hooks/auth";
import { Container, Content, Ingredients, StyledButton } from "./styles";

export function ShowDishe() {
  const mockDishe = {
    title: "Prato bonito",
    image: "https://i.ibb.co/2nRLRHk/image-2.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaelaborum esse neque sapiente, reprehenderit est, voluptas magnam impedit amet, velit ea unde ad veniam dicta facere commodi aliquam eligendi quam?",
    ingredients: [
      "carne",
      "feijao",
      "legumes",
      "legumes",
      "legumes",
      "legumes",
    ],
    price: 32.99,
    category: "meal",
  };
  const { user } = useAuth();
  const isAdmin = user.admin;
  return (
    <Container>
      <Header />
      <main>
        <ButtonText />
        <Content>
          <img src={mockDishe.image} alt="" />
          <div>
            <h2>{mockDishe.title}</h2>
            <p>{mockDishe.description}</p>
            <Ingredients>
              {mockDishe.ingredients.map((ingredient, index) => (
                <span key={String(index)}>{ingredient}</span>
              ))}
            </Ingredients>
            {isAdmin ? (
              <StyledButton>
                <Button title="Editar prato" />{" "}
              </StyledButton>
            ) : (
              <div></div>
            )}
          </div>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
