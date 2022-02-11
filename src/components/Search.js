import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;


const Search = ( props ) => {
  return (
    <Container>
      <Header />
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
      </nav>
      <Footer />
    </Container>
  );
}

export default Search;
