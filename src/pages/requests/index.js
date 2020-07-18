import React from "react";

import PersistentDrawerLeft from "../../components/drawer";

import { Container, Content } from "./styles";

function requests() {
  return (
    <Container>
      <PersistentDrawerLeft select={4} title="Meus pedidos" />
      <Content>
        <h1>PEDIDOS</h1>
      </Content>
    </Container>
  );
}

export default requests;
