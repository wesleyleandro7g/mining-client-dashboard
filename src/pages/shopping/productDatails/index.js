import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import GetAppIcon from "@material-ui/icons/GetApp";

import Drawer from "../../../components/drawer";
import Rating from "../../../components/rating";

import {
  Container,
  Content,
  ContaintSubHeader,
  ContainLeftOptions,
  ContainRigthOptions,
  ContainDatails,
  Title,
  Text,
  Scroll,
  ContainImage,
  Image,
  ContainInfo,
  Button,
} from "./styles";

import img from "../../../Temp/imgProducts/Hematita.jpeg";
import file from "../../../Temp/file.pdf";
import { products } from "../../../Temp/Products";

function ProductDatails() {
  const history = useHistory();
  const [totalRatings, setTotalRatings] = useState(5);
  const [product, setProduct] = useState({});

  const Avaliacoes = [
    {
      id: 1,
      stars: 5,
      title: "Muito Bom!",
      description: "Excente minério, entrega rápida e alta confiabilidade.",
    },
    {
      id: 2,
      stars: 4.5,
      title: "Excelente!",
      description: "Entrega no prazo e com agilidade.",
    },
    {
      id: 3,
      stars: 4,
      title: "Bom!",
      description: "Excente minério, entrega rápida e alta confiabilidade.",
    },
    {
      id: 4,
      stars: 3.5,
      title: "Ótimo!",
      description: "Entrega no prazo e com agilidade.",
    },
    {
      id: 5,
      stars: 4,
      title: "Muito Bom!",
      description: "Excente minério, entrega rápida e alta confiabilidade.",
    },
    {
      id: 6,
      stars: 2,
      title: "Médio!",
      description: "Entrega no prazo e com agilidade.",
    },
  ];

  const Caracteristicas = [
    {
      id: 1,
      title: "Teor",
      value: "50%",
    },
    {
      id: 2,
      title: "Saturação",
      value: "20mm - 30mm",
    },
    {
      id: 3,
      title: "Granulometria",
      value: "20mm - 30mm",
    },
    {
      id: 4,
      title: "Solubilidade",
      value: "15%",
    },
    {
      id: 5,
      title: "Teor",
      value: "50%",
    },
    {
      id: 6,
      title: "Saturação",
      value: "10%",
    },
    {
      id: 7,
      title: "Granulometria",
      value: "20mm - 30mm",
    },
  ];

  function moreRating() {
    setTotalRatings(totalRatings + 10);
  }

  useEffect(() => {
    const productId = localStorage.getItem("productId");

    products.map((item) => {
      if (item.id == productId) {
        setProduct(item);
      }
    });
  }, []);

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
            <Title style={{ cursor: "auto" }}>Detalhes</Title>
          </ContainLeftOptions>

          <ContainRigthOptions>
            <GetAppIcon />
            <h3 style={{ fontWeight: 400 }}>
              <a
                href={file}
                download="Exemplo de relatório"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Baixar relatório de análize química
              </a>
            </h3>
          </ContainRigthOptions>
        </ContaintSubHeader>

        <Scroll verticalContainerStyle={{ display: "none" }}>
          <ContainDatails style={{ flexDirection: "row", height: "30vh" }}>
            <ContainImage>
              <Image src={product.image} />
            </ContainImage>
            <ContainInfo>
              <Text> {product.name} </Text>
              <Rating value={3} />
              <Text style={{ marginTop: "auto" }}>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "USD",
                }).format(product.value)}
              </Text>
            </ContainInfo>
          </ContainDatails>

          <ContainDatails>
            <h2>Características</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                marginLeft: "10px",
              }}
            >
              {Caracteristicas.map((index) => (
                <div key={index.id} style={{ marginBottom: 15 }}>
                  <Text style={{ fontSize: 14 }}> {index.title} </Text>
                  <Text> {index.value} </Text>
                </div>
              ))}
            </div>
          </ContainDatails>

          <ContainDatails>
            <h2>Descrição</h2>
            <Text
              style={{ marginLeft: "10px", marginBottom: "5%", fontSize: 18 }}
            >
              Minério extraído do região da grande Belo Horizonte. Seu uso pode
              ser em construções de grande e médio porte.
            </Text>
          </ContainDatails>

          <ContainDatails>
            <h2>Opiniões sobre o minério</h2>
            {Avaliacoes.map(
              (index) =>
                index.id < totalRatings && (
                  <div
                    key={index.id}
                    style={{ marginBottom: 15, marginLeft: "10px" }}
                  >
                    <Rating value={index.stars} />
                    <Text> {index.title} </Text>
                    <Text style={{ fontSize: 18 }}> {index.description} </Text>
                  </div>
                )
            )}
            <Button onClick={() => moreRating()}>Exibir mais avaliações</Button>
          </ContainDatails>

          <ContainDatails>
            <h2>Perguntas frequentes</h2>
          </ContainDatails>

          <ContainDatails>
            <h2>Sobre o fornecedor</h2>
          </ContainDatails>
        </Scroll>
      </Content>
    </Container>
  );
}

export default ProductDatails;
