import styled from "styled-components";
import { Colors } from "../../styles/CommonStyles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 40px;
  padding: 5px;
  border-radius: 5px;
  background-color: #fff;
  border: 0.5px solid rgba(153, 153, 153, 0.2);

  :hover {
    width: 350px;
    transition: 300ms;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  margin-left: 5px;
  background-color: #fff;
  border: 0;
  border-radius: 5px;
  color: ${Colors.secondary};
  font-weight: 500;

  ::placeholder {
    color: ${Colors.subTitle};
  }

  :focus {
    outline: 0;
    ::placeholder {
      color: #fff;
    }
  }
`;
