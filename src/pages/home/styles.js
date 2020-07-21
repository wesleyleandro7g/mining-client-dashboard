import styled from "styled-components";
import Scrolle from "react-scrollbar";
import { Colors } from "../../styles/CommonStyles";

export const Container = styled.div`
  display: flex;
  background-color: ${(props) => Colors.background};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 5%;
  margin-left: 1%;
  background-color: ${(props) => Colors.background};
`;

export const ContainCards = styled.div`
  display: flex;
  width: 98%;
  justify-content: space-between;
  margin-top: 7%;
  margin-bottom: 3%;
`;

export const Scroll = styled(Scrolle)`
  height: 100vh;
`;
