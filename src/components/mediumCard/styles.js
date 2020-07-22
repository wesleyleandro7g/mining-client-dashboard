import styled from "styled-components";
import { Colors } from "../../styles/CommonStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 30%;
  height: 230px;
  border-radius: 5px;
  background-color: ${(props) => Colors.tertiary};
  border: 0.5px solid rgba(153, 153, 153, 0.2);

  @media (max-width: 1080px) {
    width: 80%;
    margin-top: 7%;
  }
`;

export const SuspenseCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27%;
  height: 200px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  margin-top: -70px;

  position: absolute;

  :hover {
    margin-top: -120px;
    margin-bottom: 20px;
    transition: 200ms;
  }

  -webkit-box-shadow: 0px 5px 10px 0px rgba(204, 204, 204, 1);
  -moz-box-shadow: 0px 5px 10px 0px rgba(204, 204, 204, 1);
  box-shadow: 0px 5px 10px 0px rgba(204, 204, 204, 1);

  @media (max-width: 1080px) {
    width: 70%;
  }
`;

export const ContainSuspenseInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

export const FloatCard = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: green;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 65%;
  border-bottom: 1px solid #cccccc;
`;

export const CardFooter = styled(CardHeader)`
  border-bottom: 0;
  height: 35%;
`;
