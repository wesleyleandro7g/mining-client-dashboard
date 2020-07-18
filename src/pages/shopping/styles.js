import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin-top: 5%;
  margin-left: 1%;
  margin-right: 1%;
`;

export const ContainCards = styled(Content)`
  justify-content: space-around;
  height: 85%;
`;
