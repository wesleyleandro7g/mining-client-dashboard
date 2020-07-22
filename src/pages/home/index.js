import React from "react";
import { MdReportProblem, MdAttachMoney, MdTrendingUp } from "react-icons/md";
import Table from "../../components/table";

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
            <SmallCard
              colorCardIcon="#40bf40"
              icon={MdAttachMoney}
              titleCard="Saldo disponível"
              textCard="R$ 54000,00"
              textFooter="SMALL CARD"
            />
            <SmallCard
              colorCardIcon="#ffad33"
              icon={MdReportProblem}
              titleCard="Small card"
              textCard="Small Card"
              textFooter="SMALL CARD"
            />
            <SmallCard
              colorCardIcon="#ff4d4d"
              icon={MdReportProblem}
              titleCard="Small Card"
              textCard="Small Card"
              textFooter="SMALL CARD"
            />
            <SmallCard
              colorCardIcon="#1ab2ff"
              icon={MdTrendingUp}
              titleCard="Ultima compra"
              textCard="Nenhuma compra"
              textFooter="SMALL CARD"
            />
          </ContainCards>
          <ContainCards style={{ display: "flex" }}>
            <Table />
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
