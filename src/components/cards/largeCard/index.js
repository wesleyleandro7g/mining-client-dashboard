import React from "react";

import Map from "../../map";

import { Container, Content, Text } from "./styles";

const largeCard = () => {
  return (
    <Container>
      <Content>
        <Text>TABLE</Text>
      </Content>
      <Content>
        <Map />
      </Content>
    </Container>
  );
};

export default largeCard;
