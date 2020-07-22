import styled from "styled-components";
import { Colors } from "../../styles/CommonStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 550px;
  border-radius: 5px;
  padding-left: 2%;
  padding-right: 2%;
  background-color: ${(props) => Colors.tertiary};
  border: 0.5px solid rgba(153, 153, 153, 0.2);
`;

export const ContainIconCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 90px;
  margin-top: -30px;
  background-color: ${(props) => props.colorCardIcon};
  border-radius: 3px;

  -webkit-box-shadow: 0px 5px 10px 0px rgba(204, 204, 204, 1);
  -moz-box-shadow: 0px 5px 10px 0px rgba(204, 204, 204, 1);
  box-shadow: 0px 5px 10px 0px rgba(204, 204, 204, 1);
`;

export const ContainItemsCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Text = styled.h4`
  margin: 0;
  padding: 0;
  font-weight: 400;
  color: #595959;
`;
