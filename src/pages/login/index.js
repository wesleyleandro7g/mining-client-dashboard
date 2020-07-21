import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import Lottie from "react-lottie";
import CircularProgress from "@material-ui/core/CircularProgress";

import {
  Container,
  Content,
  Title,
  SubTitle,
  Form,
  TextInput,
  Button,
} from "./styles";

import animation from "../../assets/animations/lets-chat.json";

export default function Login() {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [spiner, setSpiner] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
  };

  function handleLogin(e) {
    e.preventDefault();

    if (!userName || !password) {
      alert("Preencha todos os campos");
      return;
    }

    setSpiner(!spiner);

    setTimeout(() => {
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
        setSpiner(false);
      } else {
        setSpiner(false);
        alert("Senha Incorreta!");
      }
    }, 1000);
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

          <Button onClick={handleLogin}>
            {spiner ? (
              <CircularProgress size={22} style={{ color: "#fff" }} />
            ) : (
              "Entrar"
            )}
          </Button>
        </Form>
        <Link className="back-link">
          <FiLogIn size={16} color="#34558b" />
          Não tenho cadastro
        </Link>
      </Content>
      <Content style={{ maxWidth: "100%" }}>
        <Lottie options={defaultOptions} width="100%" height="100%" />
      </Content>
    </Container>
  );
}
