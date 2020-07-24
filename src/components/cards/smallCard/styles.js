import styled from "styled-components";
import { Colors } from "../../../styles/CommonStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 22%;
  height: 15vh;
  border-radius: 5px;
  background-color: ${(props) => Colors.tertiary};
  border: 0.5px solid rgba(153, 153, 153, 0.2);
  cursor: pointer;

  :focus {
    outline: 0;
  }

  @media (max-width: 1250px) {
    width: 400px;
  }

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

export const FloatCard = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: green;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 65%;
  border-bottom: 1px solid #cccccc;
`;

export const CardFooter = styled(CardHeader)`
  border-bottom: 0;
  height: 35%;
`;

export const ContainIconCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 100%;
  margin-top: -40px;
  background-color: ${(props) => props.colorCardIcon};
  border-radius: 3px;

  -webkit-box-shadow: 0px 5px 10px 0px rgba(204, 204, 204, 1);
  -moz-box-shadow: 0px 5px 10px 0px rgba(204, 204, 204, 1);
  box-shadow: 0px 5px 10px 0px rgba(204, 204, 204, 1);

  :hover {
    transition: 200ms;
    margin-top: -50px;
  }
`;

export const ContainItemsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 75%;
  height: 100%;
`;

export const Text = styled.h4`
  margin: 0;
  padding: 0;
  font-weight: 400;
  color: #595959;
`;
