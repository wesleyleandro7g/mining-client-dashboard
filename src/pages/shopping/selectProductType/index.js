import React from "react";

import PersistentDrawerLeft from "../../../components/drawer";
import OreTypeCard from "../../../components/oreTypeCard";
import Filter from "../../../components/filter";

import { products1, products2, products3 } from "../../../Temp/TypeProduct";

import { Container, Content, ContainCards, ContainHeader } from "./styles";

function shopping() {
  return (
    <Container>
      <PersistentDrawerLeft select={2} title="Comprar" />
      <Content>
        <ContainHeader>
          <h1>Selecione o tipo de minério</h1>
          <Filter placeholder="Pesquisar minério" />
        </ContainHeader>
        <ContainCards>
          <OreTypeCard title="Minerais metálicos" products={products1} />
          <OreTypeCard title="Minerais não metálicos" products={products2} />
          <OreTypeCard title="Minerais elétricos" products={products3} />
        </ContainCards>
      </Content>
    </Container>
  );
}

export default shopping;
