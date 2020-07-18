import React from "react";

import PersistentDrawerLeft from "../../components/drawer";
import SmallCard from "../../components/smallCard";
import MediumCard from "../../components/mediumCard";
import LargeCard from "../../components/largeCard";

import { Container, Content, ContainCards, Scroll } from "./styles";

function home() {
  return (
    <Container>
      <PersistentDrawerLeft select={1} title="Bem vindo, Leandro" />
      <Content>
        <Scroll speed={0.8} contentClassName="content">
          <ContainCards>
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </ContainCards>
          <ContainCards>
            <LargeCard>
              <h1>Teste</h1>
            </LargeCard>
          </ContainCards>
          <ContainCards>
            <MediumCard />
            <MediumCard />
            <MediumCard />
          </ContainCards>
        </Scroll>
      </Content>
    </Container>
  );
}

export default home;
