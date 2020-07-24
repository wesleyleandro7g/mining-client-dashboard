import styled from "styled-components";
import { Colors } from "../../../styles/CommonStyles";

export const Container = styled.div`
  display: flex;
  background-color: ${Colors.background};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin-left: 1%;
  margin-right: 1%;
  background-color: ${Colors.background};
`;

export const ContainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5%;
`;

export const ContainCards = styled(Content)`
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
  margin-top: 1%;
  height: 85%;
`;

export const Title = styled.h1`
  color: ${Colors.title};
`;
