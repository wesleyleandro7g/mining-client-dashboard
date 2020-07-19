import React from "react";

import PersistentDrawerLeft from "../../components/drawer";
import SmallCard from "../../components/smallCard";
import MediumCard from "../../components/mediumCard";
import LargeCard from "../../components/largeCard";

import { Container, Content, ContainCards, Scroll } from "./styles";

function home() {
  return (
    <Container>
      <PersistentDrawerLeft
        select={1}
        title={`Bem vindo(a), ${localStorage.getItem("firstName")}!`}
      />
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
          <ContainCards
            style={{
              marginTop: 0,
              marginBottom: 2,
              justifyContent: "flex-end",
            }}
          >
            <h5 style={{ fontSize: 14, fontWeight: 400, color: "#696969" }}>
              Todos os direitos reservados | MINING 2020
            </h5>
          </ContainCards>
        </Scroll>
      </Content>
    </Container>
  );
}

export default home;
