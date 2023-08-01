import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export function ShowDishe() {
  const mockDishe = {
    title: "Prato bonito",
    image: "https://i.ibb.co/2nRLRHk/image-2.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaelaborum esse neque sapiente, reprehenderit est, voluptas magnam impedit amet, velit ea unde ad veniam dicta facere commodi aliquam eligendi quam?",
    ingredients: ["carne", "feijao", "legumes"],
    price: 32.99,
    category: "meal",
  };
  return (
    <Container>
      <Header />
      <main>
        <ButtonText />
        <div>
          <img src={mockDishe.image} alt="" />
          <div>
            <h2>{mockDishe.title}</h2>
            <p>{mockDishe.description}</p>
            {mockDishe.ingredients.map( (ingredient, index ) => (
             <span key={String(index)} >
              {ingredient}
              </span>
            ))}
            <button>editar prato</button>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  );
}
