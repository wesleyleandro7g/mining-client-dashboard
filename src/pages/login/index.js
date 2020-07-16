import React from "react";

import {
  Container,
  Content,
  Title,
  SubTitle,
  Form,
  TextInput,
  Button,
} from "./styles";

function login() {
  return (
    <Container>
      <Content>
        <Title>MINING</Title>
        <SubTitle>Faça seu login</SubTitle>
        <Form>
          <TextInput />
          <TextInput />
          <Button />
        </Form>
      </Content>
      <Content>
        <h1>image</h1>
      </Content>
    </Container>
  );
}

export default login;
