import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin-top: 5%;
  margin-left: 1%;
  margin-right: 1%;
`;

export const ContainCards = styled(Content)`
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
  margin-top: 1%;
  height: 85%;
`;
