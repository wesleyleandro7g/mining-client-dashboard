import styled from "styled-components";
import Scrolle from "react-scrollbar";

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 5%;
  margin-left: 1%;
`;

export const ContainCards = styled.div`
  display: flex;
  width: 99%;
  justify-content: space-between;
`;

export const Scroll = styled(Scrolle)`
  margin-top: 5vh;
  height: 100vh;
`;
