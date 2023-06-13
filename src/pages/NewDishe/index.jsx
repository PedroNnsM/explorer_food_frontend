import { useState } from "react";
import { Header } from "../../components/Header";
import { Container, Content, TextTop, Form } from "./styles";

import { Footer } from "../../components/Footer";
import { SlArrowLeft } from "react-icons/sl";
import { FiUpload } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";

import { api } from "../../services/api";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { IngredientsItem } from "../../components/IngredientsItem";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";

export function NewDishe() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  function handleSelectimage(event) {
    setImage(event.target.files[0]);
  }

  const handleSelectChange = (event) => {
    setCategory(event.target.value);
  };

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveTag(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function handleNewDishe() {
    if (!image) {
      return alert("Adicione a imagem do prato");
    }
    if (!title) {
      return alert("Digite o nome do prato");
    }
    if (newIngredient) {
      return alert(
        "Você deixou um ingrediente no campo adicionar, mas não clicou no botão em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
    }
    if (!price) {
      return alert("Digite o preço do prato");
    }
    if (!description) {
      return alert("Digite a descrição do prato");
    }

    const form = new FormData();
    form.append("image", image);
    const imageResponse = await api.post("/images", form);

    await api
      .post("/dishes", {
         title,
       description,
       ingredients,
       price,
       category,
       image: imageResponse.data.filename,
     })
     .then(() => {
       alert("Prato cadastrado com sucesso!");
       handleBack();
     })
     .catch((error) => {
       if (error.response) {
         alert(error.response.data.message);
       } else {
         alert("Não foi possível cadastrar o prato!");
       }
     });
  }
  return (
    <Container>
      <Header />
      <Content>
        <TextTop onClick={handleBack}>
          <SlArrowLeft /> <span>Voltar</span>
        </TextTop>
        <TextTop>
          <h3>Novo prato</h3>
        </TextTop>
        <Form>
          <Section title="Imagem do prato">
            <Input
              type="file"
              id="imagePlate"
              name="imagePlate"
              onChange={handleSelectimage}
              accept="image/png, image/jpeg"
            />
            <div className="labelImg">
              <FiUpload size={24} />{" "}
              <label htmlFor="imagePlate">Selecione imagem</label>
            </div>
          </Section>
          <Section title="Nome">
            <Input
              placeholder="Ex.: Salada Ceasar"
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Section>
          <Section title="Cetegoria">
            <select
              id="category"
              value={category}
              onChange={handleSelectChange}
            >
              <option value="">Selecione...</option>
              <option value="meal">Refeição</option>
              <option value="dessert">Sobremesa</option>
              <option value="drink">Bebida</option>
            </select>
            <RiArrowDownSLine size={24} />
          </Section>
          <Section title="Ingredientes">
            <div className="Ingredients">
              {ingredients.map((Ingredient, index) => (
                <IngredientsItem
                  key={String(index)}
                  value={Ingredient}
                  onClick={() => handleRemoveTag(Ingredient)}
                />
              ))}
              <IngredientsItem
                isNew
                placeholder="Adicionar "
                onChange={(e) => setNewIngredient(e.target.value)}
                value={newIngredient}
                onClick={handleAddIngredient}
              />
            </div>
          </Section>
          <Section title="Preço">
            <p className="price">R$</p>
            <Input
              type="number"
              placeholder="00,00"
              className="priceInput"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Section>
          <Section title="Descrição">
            <Textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Section>
          <Button title="Salvar alterações" forms onClick={handleNewDishe} />
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
