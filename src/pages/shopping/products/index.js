import React from "react";

import Drawer from "../../../components/drawer";
import ProductCard from "../../../components/productCard";

import {
  Container,
  Content,
  ContaintSubHeader,
  ContainProductsList,
  Title,
  Scroll,
} from "./styles";

import { products } from "../../../Temp/Products";

function handleProducts() {
  return (
    <Container>
      <Drawer select={2} title="Comprar" />
      <Content>
        <ContaintSubHeader>
          <Title to="/compras">{localStorage.getItem("section")}</Title>
          <Title>|</Title>
          <Title style={{ cursor: "auto" }}>
            {localStorage.getItem("product")}
          </Title>
        </ContaintSubHeader>
        <Scroll speed={2} contentClassName="content">
          <ContainProductsList>
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </ContainProductsList>
        </Scroll>
      </Content>
    </Container>
  );
}

export default handleProducts;
