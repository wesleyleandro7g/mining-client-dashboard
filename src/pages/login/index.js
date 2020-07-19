import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import {
  Container,
  Content,
  Title,
  SubTitle,
  Form,
  TextInput,
  Button,
  Image,
} from "./styles";

import img from "../../assets/images/heroes.png";

export default function Login() {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (!userName) {
      alert("Preencha todos os campos");
      return;
    }

    if (password == "123") {
      const parts = userName.split(" ");
      if (parts.length == 1) {
        const initials = parts[0].substring(0, 1);
        localStorage.setItem("initials", initials.toUpperCase());
      } else {
        const initials = parts[0].substring(0, 1) + parts[1].substring(0, 1);
        localStorage.setItem("initials", initials.toUpperCase());
      }

      localStorage.setItem("firstName", parts[0]);
      localStorage.setItem("userName", userName);

      history.push("/home");
    } else {
      alert("Senha Incorreta!");
    }
  }

  return (
    <Container>
      <Content>
        <Title>MINING</Title>
        <SubTitle>Faça seu login</SubTitle>
        <Form>
          <TextInput
            placeholder="Seu nome"
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextInput
            placeholder="Sua senha"
            onChange={(e) => setPassword(e.target.value)}
            secure="disc"
          />

          <Button onClick={handleLogin}>Entar</Button>
        </Form>
        <Link className="back-link">
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
