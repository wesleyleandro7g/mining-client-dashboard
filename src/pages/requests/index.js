import React from "react";
import Lottie from "react-lottie";

import PersistentDrawerLeft from "../../components/drawer";

import { Container, Content, Title } from "./styles";

import pageContruction from "../../assets/animations/development.json";

function Requests() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pageContruction,
  };

  return (
    <Container>
      <PersistentDrawerLeft select={4} title="Negociações" />
      <Content>
        <Lottie options={defaultOptions} width="100%" height="100%" />
        <Title>Em construção!!!</Title>
      </Content>
    </Container>
  );
}

export default Requests;
