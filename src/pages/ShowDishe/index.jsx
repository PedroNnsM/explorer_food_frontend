import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export function ShowDishe() {
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
