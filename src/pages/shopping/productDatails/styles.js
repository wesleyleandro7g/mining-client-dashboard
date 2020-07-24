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

export const ContainRigthOptions = styled.div`
  display: flex;
  align-items: center;
`;

export const Scroll = styled(Scrolle)`
  width: 90%;
  height: 85vh;
  align-self: center;
  background-color: #fff;

  -webkit-scrollbar {
    display: none;
  }
`;

export const ContainDatails = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 1%;
  border-bottom: 0.5px solid #ccc;
`;

export const ContainImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  padding: 5px;
`;

export const ContainInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin-left: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Title = styled(Link)`
  cursor: pointer;
  color: #000;
  margin-right: 5px;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;

  :focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  border: 0;
  border-radius: 2px;
  margin-bottom: 5px;
  cursor: pointer;

  background-color: #ddd;
  color: #333;
  :focus {
    outline: 0;
  }

  :hover {
    transition: 300ms;
    background-color: #ccc;
  }
`;

export const Text = styled.h1`
  margin: 0;
  font-weight: 400;
`;
