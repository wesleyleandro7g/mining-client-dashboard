import React from "react";

import Drawer from "../../../components/drawer";

import { Container, Content } from "./styles";

function products() {
  return (
    <Container>
      <Drawer select={2} title="Comprar" />
      <Content>
        <h1>COMPRAR</h1>
      </Content>
    </Container>
  );
}

export default products;
