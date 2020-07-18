import React from "react";

import PersistentDrawerLeft from "../../components/drawer";

import { Container, Content } from "./styles";

function negociation() {
  return (
    <Container>
      <PersistentDrawerLeft select={3} title="Minhas barganhas" />
      <Content>
        <h1>NEGOCIAÇÕES</h1>
      </Content>
    </Container>
  );
}

export default negociation;
