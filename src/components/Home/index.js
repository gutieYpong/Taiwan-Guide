import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Banner from "./Banner";
import Explore from "./Explore";
import Participate from "./Participate";
import Enjoy from "./Enjoy";
import Subscribe from "./Subscribe";
import Footer from "../Footer";

const GridBox = styled.div`
  width: 100%;
  /* max-width: 144rem; */
  height: auto;
  max-height: 444.8rem;
  display: grid;

  //* height of 'fixed' header: 10rem, banner height: 92.4 + 10 = 102.4rem
  grid-template-rows: 102.4rem 106rem 78rem 89.6rem 62rem 6.8rem; 

  justify-items: center;
`;

const Home = props => {
  return (
    <GridBox>
      <Header />
      <Banner />
      <Explore />
      <Participate />
      <Enjoy />
      <Subscribe />
      <Footer />
    </GridBox>
  );
}

export default Home;
