import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Lottie from "react-lottie";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FilterListIcon from "@material-ui/icons/FilterList";
import CloseIcon from "@material-ui/icons/Close";

import Drawer from "../../../components/drawer";
import ProductCard from "../../../components/cards/productCard";

import {
  Container,
  Content,
  ContaintSubHeader,
  ContainLeftOptions,
  ContainRigthOptions,
  ContainMenu,
  ContainProductsList,
  ContainFilter,
  Title,
  Scroll,
  ButtonFilter,
} from "./styles";

import { products } from "../../../Temp/Products";

import pageContruction from "../../../assets/animations/construction-in-process-by-kit8net.json";

function HandleProducts() {
  const history = useHistory();
  const [filterState, setFilterState] = useState(false);

  const handleProductDatails = () => {
    history.push("/compras/produtos/datalhes");
  };

  function FilterState() {
    setFilterState(!filterState);
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pageContruction,
  };

  return (
    <Container>
      <Drawer select={2} title="Comprar" />
      <Content>
        <ContaintSubHeader>
          <ContainLeftOptions>
            <Title to="/compras">{localStorage.getItem("section")}</Title>
            <ArrowForwardIosIcon
              style={{ color: "#000", fontSize: 16, marginRight: 5 }}
            />
            <Title style={{ cursor: "auto" }}>
              {localStorage.getItem("product")}
            </Title>
          </ContainLeftOptions>
          <ContainRigthOptions>
            <ButtonFilter onClick={() => FilterState()}>
              {filterState ? (
                <CloseIcon style={{ fontSize: 16, color: "#333" }} />
              ) : (
                <FilterListIcon style={{ fontSize: 16, color: "#333" }} />
              )}
              <h5 style={{ fontWeight: 500 }}>FILTROS</h5>
            </ButtonFilter>
          </ContainRigthOptions>
        </ContaintSubHeader>
        <ContainMenu>
          <Scroll speed={2} style={{ width: filterState ? "80%" : "100%" }}>
            <ContainProductsList>
              {products.map((product) => (
                <ProductCard
                  product={product}
                  onClick={() => handleProductDatails(product)}
                />
              ))}
            </ContainProductsList>
          </Scroll>
          <ContainFilter
            style={{
              width: filterState ? "20%" : "0",
              display: filterState ? "" : "none",
            }}
          >
            <Lottie options={defaultOptions} width="100%" height="100%" />
            <h3>Em Construção!!</h3>
          </ContainFilter>
        </ContainMenu>
      </Content>
    </Container>
  );
}

export default HandleProducts;
