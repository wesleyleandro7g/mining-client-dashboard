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

import Map from "../../../components/map";

import pageContruction from "../../../assets/animations/construction-in-process-by-kit8net.json";

function ProductDatails() {
  const history = useHistory();

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
            <Title to="/compras/produtos">
              {localStorage.getItem("product")}
            </Title>
            <ArrowForwardIosIcon
              style={{ color: "#000", fontSize: 16, marginRight: 5 }}
            />
            <Title style={{ cursor: "auto", textDecoration: "none" }}>
              Detalhes
            </Title>
          </ContainLeftOptions>
          <ContainRigthOptions>
            <h4>Baixar relatório</h4>
          </ContainRigthOptions>
        </ContaintSubHeader>
        <ContainMenu>
          <Map />
        </ContainMenu>
      </Content>
    </Container>
  );
}

export default ProductDatails;
