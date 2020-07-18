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
  function alertProduct(name) {
    alert(name);
  }

  return (
    <Container>
      <ContainTitle>
        <Title>{title}</Title>
      </ContainTitle>
      {products.map((product) => (
        <ContainProduct
          key={product.id}
          onClick={() => alertProduct(product.name)}
        >
          <SectionName>{product.name}</SectionName>
          <KeyboardArrowRightIcon />
        </ContainProduct>
      ))}
    </Container>
  );
};

export default oreTypeCard;
