import styled from "styled-components";
import Scrolle from "react-scrollbar";
import { Link } from "react-router-dom";
import { Colors } from "../../../styles/CommonStyles";

export const Container = styled.div`
  display: flex;
  background-color: ${(props) => Colors.background};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin-top: 5%;
  margin-left: 1%;
  margin-right: 1%;
  background-color: ${(props) => Colors.background};
`;

export const ContaintSubHeader = styled.div`
  display: flex;
  align-items: center;
`;

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

export const Title = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #000;
  margin-right: 5px;
  font-size: 18px;
  font-weight: 500;

  :focus {
    outline: none;
  }
`;

export const Scroll = styled(Scrolle)`
  height: 80vh;
  padding-top: 15px;
`;
