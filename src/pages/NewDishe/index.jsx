import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Container, Content, Form, Fildset } from "./styles";

import { Footer } from "../../components/Footer";
import { SlArrowLeft } from "react-icons/sl";
import { FiUpload } from "react-icons/fi";

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


  const handleSelectImg = (e) => {
    setImg(e.target.files[0]) 

  }
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
          <Fildset>
            <p className="labelImgPlate">Imagem do prato</p>
            <label htmlFor="imgPlate" className="labelImg" >
              <FiUpload size={24}  /> Selecione imagem
            </label>
            <Input
              type="file"
              id="imgPlate"
              name="imgPlate"
              onChange={handleSelectImg}
              accept="image/png, image/jpeg"
            />
          </Fildset>
          <Fildset>
            <label htmlFor="name">Nome</label>
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
              select
              id={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Fildset>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
