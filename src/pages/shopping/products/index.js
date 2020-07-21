import React from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

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

function HandleProducts() {
  const history = useHistory();

  const handleProductDatails = () => {
    history.push("/compras/produtos/datalhes");
  };

  return (
    <Container>
      <Drawer select={2} title="Comprar" />
      <Content>
        <ContaintSubHeader>
          <ArrowBackIcon
            style={{ color: "#000", fontSize: 22, marginRight: 5 }}
          />
          <Title to="/compras">{localStorage.getItem("section")}</Title>
          <Title>-</Title>
          <Title style={{ cursor: "auto" }}>
            {localStorage.getItem("product")}
          </Title>
        </ContaintSubHeader>
        <Scroll speed={2} contentClassName="content">
          <ContainProductsList>
            {products.map((product) => (
              <ProductCard
                product={product}
                onClick={() => handleProductDatails(product)}
              />
            ))}
          </ContainProductsList>
        </Scroll>
      </Content>
    </Container>
  );
}

export default HandleProducts;
