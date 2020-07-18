import React from "react";

import PersistentDrawerLeft from "../../components/drawer";

import { Container, Content } from "./styles";

function shopping() {
  return (
    <Container>
      <PersistentDrawerLeft select={2} title="Comprar" />
      <Content>
        <h1>COMPRAR</h1>
      </Content>
    </Container>
  );
}

export default shopping;
