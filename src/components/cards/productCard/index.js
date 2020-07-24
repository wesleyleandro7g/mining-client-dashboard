import React from "react";
import PanoramaIcon from "@material-ui/icons/Panorama";

import Rating from "../../rating";

import {
  Container,
  ContainImage,
  Image,
  ContainDatails,
  ContainText,
  Text,
  TextInfo,
} from "./styles";

function productCard({ product, onClick }) {
  return (
    <Container onClick={onClick}>
      <ContainImage>
        {product.image ? (
          <Image src={product.image} />
        ) : (
          <PanoramaIcon fontSize="large" color="disabled" />
        )}
      </ContainImage>
      <ContainDatails>
        <ContainText>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
            {product.name}
          </Text>
        </ContainText>

        <ContainText>
          <Text>{product.region} </Text>
        </ContainText>

        <ContainText>
          <TextInfo>Teor</TextInfo>
          <Text>
            {Intl.NumberFormat("pt-BR", {
              style: "percent",
            }).format(product.content)}
          </Text>
        </ContainText>

        <ContainText>
          <TextInfo>Operações</TextInfo>
          <Text>{product.operations} </Text>
        </ContainText>

        <ContainText>
          <Rating value={product.rating} />
        </ContainText>

        <Text style={{ marginTop: "auto", marginLeft: "auto", fontSize: 20 }}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "USD",
          }).format(product.value)}
        </Text>
      </ContainDatails>
    </Container>
  );
}

export default productCard;
