import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 80%;
  border-radius: 5px;
  background-color: #fff;
  border: 0.5px solid rgba(153, 153, 153, 0.3);
`;

export const ContainTitle = styled.div`
  margin-left: 5%;
`;
export const Title = styled.h2``;

export const ContainProduct = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  width: 90%;
  height: 35px;
  margin: 5px;
  padding: 5px;
  background-color: #fff;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;
  text-decoration: none;
  color: #4d4d4d;

  :focus {
    outline: none;
  }

  :hover {
    color: #1a1a1a;
    border-bottom: 1px solid #404040;
    transition: 300ms;
  }
`;

export const SectionName = styled.h3``;
