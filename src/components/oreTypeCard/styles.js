import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 80%;
  border-radius: 5px;
  background-color: #fff;

  -webkit-box-shadow: 0px 0px 12px 0px rgba(166, 166, 166, 1);
  -moz-box-shadow: 0px 0px 12px 0px rgba(166, 166, 166, 1);
  box-shadow: 0px 0px 12px 0px rgba(166, 166, 166, 1);
`;

export const ContainTitle = styled.div`
  margin-left: 5%;
`;
export const Title = styled.h2``;

export const ContainProduct = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  width: 90%;
  height: 35px;
  margin: 5px;
  padding: 5px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    -webkit-box-shadow: -2px 8px 15px -11px rgba(153, 153, 153, 1);
    -moz-box-shadow: -2px 8px 15px -11px rgba(153, 153, 153, 1);
    box-shadow: -2px 8px 15px -11px rgba(153, 153, 153, 1);
  }

  :focus {
    outline: none;
  }
`;

export const SectionName = styled.h4`
  color: #737373;
`;
