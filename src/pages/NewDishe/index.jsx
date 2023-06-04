import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Container, Content, Form, Fildset } from "./styles";

import { Footer } from "../../components/Footer";
import { SlArrowLeft } from "react-icons/sl";

import { api } from "../../services/api";
import { Input } from "../../components/Input";

export function NewDishe() {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

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
      <Content>
        <div>
          <div>
            <SlArrowLeft /> <p>Voltar</p>
          </div>
        </div>
        <h3>Novo prato</h3>
        <Form>
          <div>
            <Fildset>
              <label htmlFor="img">Imagem do prato</label>
              <Input
                placeholder="Digite seu nome"
                type="file"
                file
                id={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </Fildset>
            <Fildset>
              <label htmlFor="name">Nome do prato</label>
              <Input
                placeholder="Ex.: Salada Ceasar"
                type="text"
                id={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Fildset>
            <Fildset>
              <label htmlFor="category">Cetegoria</label>
              <Input
                placeholder="Digite seu nome"
                type="text"
                id={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Fildset>
          </div>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
