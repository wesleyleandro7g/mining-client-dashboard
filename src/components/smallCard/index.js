import React from "react";

import {
  Container,
  Content,
  CardHeader,
  CardFooter,
  ContainIconCard,
  ContainItemsCard,
  Text,
} from "./styles";

const SmallCard = ({
  colorCardIcon,
  icon,
  titleCard,
  textCard,
  textFooter,
}) => {
  const IconName = icon;

  return (
    <Container>
      <Content>
        <CardHeader>
          <ContainIconCard colorCardIcon={colorCardIcon}>
            <IconName size="32" color="white" />
          </ContainIconCard>
          <ContainItemsCard>
            <Text> {titleCard} </Text>
            <Text style={{ fontSize: 22, color: "#333" }}> {textCard} </Text>
          </ContainItemsCard>
        </CardHeader>
        <CardFooter>
          <Text> {textFooter} </Text>
        </CardFooter>
      </Content>
    </Container>
  );
};

export default SmallCard;
