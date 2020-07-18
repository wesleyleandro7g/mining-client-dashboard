import React from "react";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import {
  Container,
  ContainTitle,
  Title,
  ContainProduct,
  SectionName,
} from "./styles";

const oreTypeCard = ({ title, products }) => {
  return (
    <Container>
      <ContainTitle>
        <Title>{title}</Title>
      </ContainTitle>
      {products.map((product) => (
        <ContainProduct key={product.id} to="/compras/produtos">
          <SectionName>{product.name}</SectionName>
          <KeyboardArrowRightIcon />
        </ContainProduct>
      ))}
    </Container>
  );
};

export default oreTypeCard;
