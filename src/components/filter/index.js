import React from "react";
import SearchIcon from "@material-ui/icons/Search";

import { Container, Input } from "./styles";

const Filter = ({ placeholder }) => {
  return (
    <Container>
      <SearchIcon />
      <Input placeholder={placeholder} />
    </Container>
  );
};

export default Filter;
