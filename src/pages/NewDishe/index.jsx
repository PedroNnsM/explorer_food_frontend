import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Container, Content, TextTop, Form, Fildset } from "./styles";

import { Footer } from "../../components/Footer";
import { SlArrowLeft } from "react-icons/sl";
import { FiUpload } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";

import { api } from "../../services/api";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";

export function NewDishe() {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSelectImg = (e) => {
    setImg(e.target.files[0]);
  };

  const handleSelectChange = (event) => {
    setCategory(event.target.value);
  };

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
        <TextTop onClick={handleGoBack}>
          <SlArrowLeft /> <span>Voltar</span>
        </TextTop>
        <TextTop>
          <h3>Novo prato</h3>
        </TextTop>
        <Form>
          <Fildset>
            <p className="labelImgPlate">Imagem do prato</p>

            <Input
              type="file"
              id="imgPlate"
              name="imgPlate"
              onChange={handleSelectImg}
              accept="image/png, image/jpeg"
            />
            <label htmlFor="imgPlate" className="labelImg">
              <FiUpload size={24} /> Selecione imagem
            </label>
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
            <select
              id="category"
              value={category}
              onChange={handleSelectChange}
            >
              <option value="">Selecione...</option>
              <option value="Meal">Refeição</option>
              <option value="Dessert">Sobremesa</option>
              <option value="Drink">Bebida</option>
            </select>
            <RiArrowDownSLine size={24} />
          </Fildset>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
