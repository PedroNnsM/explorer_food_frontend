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
    price: 32.99,
    category: "meal",
  };
  return (
    <Container>
      <Header />
      <main>
        <ButtonText />
        <div>
          <img src="" alt="" />
          <div>
            <h2>titulo</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              laborum esse neque sapiente, reprehenderit est, voluptas magnam
              impedit amet, velit ea unde ad veniam dicta facere commodi aliquam
              eligendi quam?
            </p>
            <span>tags</span>
            <span>tags</span>
            <span>tags</span>
            <span>tags</span>
            <button>editar prato</button>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  );
}
