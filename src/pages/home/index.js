import React from "react";

import PersistentDrawerLeft from "../../components/drawer";
import MediumCard from "../../components/mediumCard";

import { Container, Content, ContainCards, Scroll } from "./styles";

function home() {
  return (
    <Container>
      <PersistentDrawerLeft select={1} title="Bem vindo, Leandro" />
      <Content>
        <Scroll speed={0.8} contentClassName="content">
          <ContainCards>
            <MediumCard />
            <MediumCard />
            <MediumCard />
            <MediumCard />
          </ContainCards>
          <div>
            <h1>Teste</h1>
          </div>
        </Scroll>
      </Content>
    </Container>
  );
}

export default home;
