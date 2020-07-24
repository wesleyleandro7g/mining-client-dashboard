import styled from "styled-components";
import { Colors } from "../../../styles/CommonStyles";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 550px;
  border-radius: 5px;
  padding-left: 2%;
  padding-right: 2%;
  background-color: ${(props) => Colors.tertiary};
  border: 0.5px solid rgba(153, 153, 153, 0.2);
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 90%;
  background-color: ${(props) => props.colorCardIcon};
`;

export const Text = styled.h4`
  margin: 0;
  padding: 0;
  font-weight: 400;
  color: #595959;
`;
