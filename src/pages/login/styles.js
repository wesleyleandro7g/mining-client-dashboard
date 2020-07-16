import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
`;

export const Title = styled.h1`
  font-size: 50px;
  color: #e02041;
`;

export const SubTitle = styled.h2`
  font-size: 30px;
  color: #313131;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TextInput = styled.input`
  width: 70%;
  height: 60px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 0;

  :focus {
    outline: 0;
  }
`;

export const Button = styled.button`
  width: 70%;
  height: 60px;
  margin-top: 15px;

  border-radius: 5px;
  border: 0;
  background-color: #e02041;
`;
