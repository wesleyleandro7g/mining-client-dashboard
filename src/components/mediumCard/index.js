import React from "react";

import {
  Container,
  CardHeader,
  CardFooter,
  SuspenseCard,
  ContainSuspenseInfo,
} from "./styles";

function MediumCard({ color }) {
  return (
    <Container>
      <CardHeader>
        <SuspenseCard color={color}>
          <h2>MEDIUM CARD</h2>
        </SuspenseCard>
        <ContainSuspenseInfo>
          <h5>MEDIUM CARD</h5>
        </ContainSuspenseInfo>
      </CardHeader>
      <CardFooter>
        <h4>MEDIUM CARD</h4>
      </CardFooter>
    </Container>
  );
}

export default MediumCard;
