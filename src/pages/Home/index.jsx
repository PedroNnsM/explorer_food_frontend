import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Container, Banner } from "./styles";
import bannerImgMobile from "../../assets/bannerImgMobile.png";
import bannerImgDesktop from "../../assets/bannerImgDesktop.png";

import { api } from "../../services/api";
import { Footer } from "../../components/Footer";

export function Home() {
  const [dishes, setDishes] = useState([]);
 
  const [ingredientsSelected, setIngredientsSelected] = useState([]);
  const [search, setSearch] = useState("");

  function handleIngredientSelected(ingredientName) {
    if (ingredientName === "all") {
      return setIngredientsSelected([]);
    }

    const alreadySelected = ingredientsSelected.includes(ingredientName);
    if (alreadySelected) {
      const filteredingredients = ingredientsSelected.filter(
        (ingredient) => ingredient != ingredientName
      );
      setIngredientsSelected(filteredingredients);
    } else {
      setIngredientsSelected((prevState) => [...prevState, ingredientName]);
    }
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(
        `/dishes?title=${search}&tags=${ingredientsSelected}`
      );
      setDishes(response.data);
      console.log(response);
    }
    fetchDishes();
  }, [ingredientsSelected, search]);

  const imgUrl = dishes.image ? `&& ${api.defaults.baseURL}/files/${dishes.image}` : null;
  const [imgaDishe, setImageDishe] = useState(imgUrl)
  console.log(dishes);
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
      {dishes &&
        dishes.map((dishe) => (
          <div key={String(dishes.id)}>
            <img src={dishe.image} alt="" />
            <p> {dishe.title}</p>
            <span>{dishe.price}</span>
          </div>
        ))}
      <Footer />
    </Container>
  );
}
