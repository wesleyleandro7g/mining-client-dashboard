import React from "react";

import Map from "../../map";
import TablePreferences from "../../tables/tablePreferences";

import { Container, Content, Text } from "./styles";

const largeCard = () => {
  return (
    <Container>
      <Content>
        <TablePreferences />
      </Content>
      <Content>
        <Map />
      </Content>
    </Container>
  );
};

export default largeCard;
