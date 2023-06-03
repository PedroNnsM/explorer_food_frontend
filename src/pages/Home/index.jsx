import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Container, Banner } from "./styles";
import bannerImage from "../../assets/bannerImg.svg";

import { api } from "../../services/api";
import { Footer } from "../../components/Footer";

export function Home() {
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(
        `/dishes?title=${search}&ingredients=${search}`
      );
      setDishes(response.data);
      console.log(response);
    }
    fetchDishes();
  }, [dishes, search]);
  return (
    <Container>
      <Header search={setSearch} />
      <Banner>
        <img src={bannerImage} alt="" />
        <div>
          <h3>Sabores inigualáveis</h3>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </Banner>
      <Footer />
    </Container>
  );
}
