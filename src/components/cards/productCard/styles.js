import styled from "styled-components";
import { Colors } from "../../../styles/CommonStyles";

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
  height: 400px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 0;
  border-radius: 2px;
  border: 0;
  cursor: pointer;
  background-color: ${(props) => Colors.tertiary};
  border: 0.5px solid rgba(153, 153, 153, 0.3);

  transition: 200ms all;

  :focus {
    outline: none;
  }

  :hover {
    -webkit-box-shadow: 0px 5px 10px 0px rgba(204, 204, 204, 1);
    -moz-box-shadow: 0px 5px 10px 0px rgba(204, 204, 204, 1);
    box-shadow: 0px 5px 10px 0px rgba(204, 204, 204, 1);
  }
`;

export const ContainImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98%;
  height: 40%;
  border-radius: 2px;
  background-color: #e6e6e6;
  margin: 1%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 2px;
`;

export const ContainDatails = styled.div`
  display: flex;
  width: 95%;
  height: 60%;
  flex-direction: column;
  justify-content: flex-start;
  padding: 5px;
`;

export const ContainText = styled.div`
  display: flex;
  margin-top: 5px;
`;

export const Text = styled.h3`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  color: #333;
`;

export const TextInfo = styled(Text)`
  font-weight: 700;
  margin-right: 5px;
`;
