import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Container, Banner } from "./styles";
import bannerImgMobile from "../../assets/bannerImgMobile.png";
import bannerImgDesktop from "../../assets/bannerImgDesktop.png";

import { api } from "../../services/api";
import { Footer } from "../../components/Footer";

export function Home() {
  const [dishes, setDishes] = useState([]);
  const [ingredientSelected, setIngredientSelected] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}&tags=${ingredientSelected}`);
      console.log(response.data);
      setDishes(response.data)
    }
    fetchDishes();
  }, [ingredientSelected, search]);
  return (
    <Container>
      <Header />
      <Banner>
        <img
          className="imgMobile"
          src={bannerImgMobile}
          alt="Macarons cloridos e frutas caindo no ar"
        />
        <img
          className="imgDesketop"
          src={bannerImgDesktop}
          alt="Macarons cloridos e frutas caindo no ar"
        />
        <div>
          <h3>Sabores inigualáveis</h3>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </Banner>
      {dishes && dishes.map((dishe) => <p key={String(dishes.id)}> {dishe.title} </p>)}
      <Footer />
    </Container>
  );
}
