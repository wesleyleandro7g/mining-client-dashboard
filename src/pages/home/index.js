import React, { useState } from "react";
import { MdReportProblem, MdAttachMoney, MdTrendingUp } from "react-icons/md";

import PersistentDrawerLeft from "../../components/drawer";
import SmallCard from "../../components/cards/smallCard";
import MediumCard from "../../components/cards/mediumCard";
import LargeCard from "../../components/cards/largeCard";
import Modal from "../../components/modal";

import {
  Container,
  Content,
  ContainCards,
  ContainMediumCards,
  Scroll,
} from "./styles";

const Home = () => {
  const [isModal, setIsModal] = useState(false);

  function handleModal() {
    setIsModal(!isModal);
  }

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
              onClick={() => handleModal()}
            />
            <SmallCard
              colorCardIcon="#ffb84d"
              icon={MdReportProblem}
              titleCard="Small card"
              textCard="Small Card"
              textFooter="SMALL CARD"
              onClick={() => handleModal()}
            />
            <SmallCard
              colorCardIcon="#ff6666"
              icon={MdReportProblem}
              titleCard="Small Card"
              textCard="Small Card"
              textFooter="SMALL CARD"
              onClick={() => handleModal()}
            />
            <SmallCard
              colorCardIcon="#8cb3d9"
              icon={MdTrendingUp}
              titleCard="Ultima compra"
              textCard="Nenhuma compra"
              textFooter="SMALL CARD"
              onClick={() => handleModal()}
            />
          </ContainCards>
          <ContainCards style={{ display: "flex" }}>
            <LargeCard />
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
      <Modal isModal={isModal} closeModal={() => handleModal()} />
    </Container>
  );
};

export default Home;
