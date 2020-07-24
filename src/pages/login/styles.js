import styled from "styled-components";
import { Colors } from "../../styles/CommonStyles";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 20px;
  width: 100%;
  max-width: 600px;
  height: 100%;
  max-height: 600px;
  padding: 4%;
`;

export const Title = styled.h1`
  font-size: 50px;
  letter-spacing: 3px;
  color: ${Colors.primary};
`;

export const SubTitle = styled.h2`
  font-size: 30px;
  color: ${Colors.title};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TextInput = styled.input`
  width: 95%;
  height: 60px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 0;
  font-size: 18px;
  color: ${Colors.title};
  border: 1px solid #dcdec6;
  border-radius: 8px;
  padding: 0 0 0 20px;

  -webkit-text-security: ${(props) => props.secure};

  :focus {
    outline: 0;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  margin-top: 15px;

  border-radius: 5px;
  border: 0;
  background-color: #34558b;
  color: ${Colors.buttonText};
  font-size: 20px;
  font-weight: 700;

  :focus {
    outline: 0;
  }

  :hover {
    transition: 500ms all;
    filter: brightness(90%);
    cursor: pointer;
  }
`;
