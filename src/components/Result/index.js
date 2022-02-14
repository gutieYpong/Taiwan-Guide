import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Search from "./Search";
import Category from "./Category";
import Main from "./Main";
import Footer from "../Footer";

const GridBox = styled.div`
  width: 100%;
  max-width: 144rem;
  height: auto;
  max-height: 185.6rem;
  display: grid;
  grid-template-rows: 6.4rem 10.9rem 6.2rem auto 6.8rem;
  justify-items: center;
`;

const Result = props => {
  return (
    <GridBox>
      <Header />
      <Search />
      <Category />
      <Main />
      <Footer GridArea />
    </GridBox>
  );
}

export default Result;
