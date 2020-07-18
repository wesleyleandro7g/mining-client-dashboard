import React from "react";

import PersistentDrawerLeft from "../../components/drawer";

import { Container, Content } from "./styles";

function home() {
  return (
    <Container>
      <PersistentDrawerLeft select={1} title="Bem vindo, Leandro" />
      <Content>
        <h1>HOME</h1>
      </Content>
    </Container>
  );
}

export default home;
