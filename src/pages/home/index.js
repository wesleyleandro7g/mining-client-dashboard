import React from "react";
import { MdReportProblem, MdAttachMoney, MdTrendingUp } from "react-icons/md";
import Table from "../../components/table";

import PersistentDrawerLeft from "../../components/drawer";
import SmallCard from "../../components/smallCard";
import MediumCard from "../../components/mediumCard";
import LargeCard from "../../components/largeCard";

import {
  Container,
  Content,
  ContainCards,
  ContainMediumCards,
  Scroll,
} from "./styles";

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
            <SmallCard
              colorCardIcon="#79d279"
              icon={MdAttachMoney}
              titleCard="Carta de crédito"
              textCard="R$ 54000,00"
              textFooter="SMALL CARD"
            />
            <SmallCard
              colorCardIcon="#ffb84d"
              icon={MdReportProblem}
              titleCard="Small card"
              textCard="Small Card"
              textFooter="SMALL CARD"
            />
            <SmallCard
              colorCardIcon="#ff6666"
              icon={MdReportProblem}
              titleCard="Small Card"
              textCard="Small Card"
              textFooter="SMALL CARD"
            />
            <SmallCard
              colorCardIcon="#8cb3d9"
              icon={MdTrendingUp}
              titleCard="Ultima compra"
              textCard="Nenhuma compra"
              textFooter="SMALL CARD"
            />
          </ContainCards>
          <ContainCards style={{ display: "flex" }}>
            <Table />
          </ContainCards>
          <ContainMediumCards>
            <MediumCard color="#8cb3d9" />
            <MediumCard color="#79d279" />
            <MediumCard color="#ffb84d" />
          </ContainMediumCards>
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
