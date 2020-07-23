import React from "react";
import MaterialTable from "../../table";

import { Container, ContainIconCard, ContainItemsCard, Text } from "./styles";

const largeCard = ({
  colorCardIcon,
  icon,
  titleCard,
  textCard,
  textFooter,
}) => {
  const IconName = icon;

  return (
    <Container>
      <MaterialTable></MaterialTable>
    </Container>
  );
};

export default largeCard;
