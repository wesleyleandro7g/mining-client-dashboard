import React from "react";

import { Container, Content, CardHeader, CardFooter } from "./styles";

function mediumCard() {
  return (
    <Container>
      <Content>
        <CardHeader>
          <h3>MEDIUM CARD</h3>
        </CardHeader>
        <CardFooter>
          <h4>MEDIUM CARD</h4>
        </CardFooter>
      </Content>
    </Container>
  );
}

export default mediumCard;