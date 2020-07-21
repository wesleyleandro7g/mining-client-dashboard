import React from "react";

import Drawer from "../../../components/drawer";

import { Container, Content } from "./styles";

function productDatails() {
  return (
    <Container>
      <Drawer select={2} title="Comprar" />
      <Content>
        <h1>Datails</h1>
      </Content>
    </Container>
  );
}

export default productDatails;
