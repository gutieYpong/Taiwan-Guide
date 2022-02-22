import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";

import Header from "./Header";
import Search from "./Search";
import Category from "./Category";
import Main from "./Main";
import Footer from "../Footer";

import { tourismInfo, fetchData } from "../../features/tourismSlice";
import { API_INFO_MAP } from "../../constants/common";

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
  // useEffect(() => {
  //   // clean up controller
  //   let isSubscribed = true;

  //   (
  //     async() => {
  //       if( isSubscribed )
  //         await dispatch(fetchData(API_INFO_MAP[selectedIdx].category));
  //       else
  //         throw new Error('jump to end.');
  //     }
  //   )()
  //     .then( () => console.log(`data fetcted.`) )
  //     .catch( error => console.log(error.message) );

  //   // cancel subscription to useEffect
  //   return () => (isSubscribed = false)
  // }, [selectedIdx]);

  return (
    <GridBox>
      <Header />
      <Search />
      <Category />
      <Main />
      <Footer GridArea style={{ position: 'fixed', bottom: 0 }} />
    </GridBox>
  );
}

export default Result;
