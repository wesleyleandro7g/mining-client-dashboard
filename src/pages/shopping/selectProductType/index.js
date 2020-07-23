import React from "react";

import PersistentDrawerLeft from "../../../components/drawer";
import OreTypeCard from "../../../components/cards/oreTypeCard";
import Filter from "../../../components/filter";

import { products1, products2, products3 } from "../../../Temp/TypeProduct";

import {
  Container,
  Content,
  ContainCards,
  ContainHeader,
  Title,
} from "./styles";

function shopping() {
  return (
    <Container>
      <PersistentDrawerLeft select={2} title="Comprar" />
      <Content>
        <ContainHeader>
          <Title>Selecione o tipo de minério</Title>
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
