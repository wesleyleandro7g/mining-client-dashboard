import styled from "styled-components";
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
