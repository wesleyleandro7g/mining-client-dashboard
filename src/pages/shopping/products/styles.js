import styled from "styled-components";
import Scrolle from "react-scrollbar";
import { Link } from "react-router-dom";
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

export const ContaintSubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5%;
`;

export const ContainLeftOptions = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainRigthOptions = styled.div``;

export const ContainMenu = styled.div`
  display: flex;
`;

export const ContainProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  width: 100%;

  @media (max-width: 2050px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 1750px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1150px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContainFilter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 300ms;
`;

export const Title = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #000;
  margin-right: 5px;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;

  :focus {
    outline: none;
  }
`;

export const Scroll = styled(Scrolle)`
  height: 80vh;
  padding-top: 15px;
  transition: 300ms;

  -webkit-scrollbar {
    display: none;
  }
`;

export const ButtonFilter = styled.button`
  display: flex;
  width: 100px;
  height: 35px;
  align-items: center;
  justify-content: space-around;
  background-color: #d9d9d9;
  border: 0;
  border-radius: 5px;
  cursor: pointer;

  :focus {
    outline: 0;
  }

  :hover {
    background-color: #ccc;
  }
`;
