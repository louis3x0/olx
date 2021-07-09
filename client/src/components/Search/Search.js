import React from "react";
import Input from "../Input/Input";
import { Container, Form, InputContainer, InputDiv } from "./styles";
import { FaSearch } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Search = () => {
  return (
    <InputContainer>
      <Container>
        <Form>
          <InputDiv>
            <Input
              type="text"
              placeholder="4 327 054 anunturi din apropierea ta"
            />
            <FaSearch />
          </InputDiv>
          <InputDiv>
            <Input type="text" placeholder="Toata Romania" />
            <HiOutlineLocationMarker class="fs-27" />
          </InputDiv>
          <InputDiv>
            <Input placeholder="Cauta acum" class="last-input" />
            <FaSearch />
          </InputDiv>
        </Form>
      </Container>
    </InputContainer>
  );
};

export default Search;
