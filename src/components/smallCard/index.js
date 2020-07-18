import React from "react";

import { Container, Content, CardHeader, CardFooter } from "./styles";

function smallCard() {
  return (
    <Container>
      <Content>
        <CardHeader>
          <h4>SMALL CARD</h4>
        </CardHeader>
        <CardFooter>
          <h6>SMALL CARD</h6>
        </CardFooter>
      </Content>
    </Container>
  );
}

export default smallCard;
