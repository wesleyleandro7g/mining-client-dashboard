import styled from "styled-components";
import Scrolle from "react-scrollbar";

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5%;
  margin-left: 1%;
  margin-right: 1%;
`;

export const ContaintSubHeader = styled.div``;

export const ContainProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  width: 100%;

  @media (max-width: 1900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 1410px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1150px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Title = styled.h2``;

export const Scroll = styled(Scrolle)`
  height: 80vh;
  padding-top: 15px;
`;
