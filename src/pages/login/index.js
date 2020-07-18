import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import {
  Container,
  Content,
  Title,
  SubTitle,
  Form,
  TextInput,
  Button,
  Image,
  Cover,
} from "./styles";

import img from "../../assets/images/heroes.png";

function login() {
  return (
    <Container>
      <Content>
        <Title>MINING</Title>
        <SubTitle>Faça seu login</SubTitle>
        <Form>
          <TextInput placeholder="Seu email" />
          <TextInput placeholder="Sua senha" />
          <Link to="home">
            <Button>Entar</Button>
          </Link>
        </Form>
        <Link className="back-link" to="home">
          <FiLogIn size={16} color="#E02041" />
          Não tenho cadastro
        </Link>
      </Content>
      <Content>
        <Image src={img} />
      </Content>
    </Container>
  );
}

export default login;
