import styled from "styled-components";
import { Colors } from "../../styles/CommonStyles";

export const Container = styled.div`
  display: flex;
  background-color: ${(props) => Colors.background};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  margin-top: 5%;
  margin-left: 1%;
  background-color: ${(props) => Colors.background};
`;

export const Title = styled.h1`
  color: #333;
  font-weight: 400;
`;
