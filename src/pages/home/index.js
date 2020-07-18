import React from "react";

import PersistentDrawerLeft from "../../components/drawer";

import { Container, Content } from "./styles";

function home() {
  return (
    <Container>
      <PersistentDrawerLeft />
      <Content>
        <h1>Teste</h1>
        <h1>Teste</h1>
        <h1>Teste</h1>
        <h1>Teste</h1>
      </Content>
    </Container>
  );
}

export default home;
