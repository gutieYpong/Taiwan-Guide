import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import HomePage from "./components/Home";
import ResultPage from './components/Result';


const theme = createTheme({
  palette: {
    primary: {
      light: "#A1B893", // green-200
      main: "#769763" // green-300
    },
    auxiliary: {
      yellow: "#F1D675"
    },
    neutral: {
      lightest: "#FAFAFA", // grey-50
      little: "#ACACAC", // grey-200
      light: "#C4C4C4",
      main: "#737373" // grey-300
    },
    black: "#000000",
    white: "#FFFFFF",

    // primary: {
      //*light: will be calculated from palette.primary.main,
      // main: '#ff4400',
      //* dark: will be calculated from palette.primary.main,
      //* contrastText: will be calculated to contrast with palette.primary.main
    // },
    // secondary: {
    //   main: '#0044ff',
    // },

    //* Used by `getContrastText()` to maximize the contrast between
    //* the background and the text.
    // contrastThreshold: 3,
    //* Used by the functions below to shift a color's luminance by approximately
    //* two indexes within its tonal palette.
    //* E.g., shift from Red 500 to Red 300 or Red 700.
    // tonalOffset: 0.2,
  }
});

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  /* align-items: center; */

  background-color: lightcoral;
`;

const App = props => {
  return (
    <ThemeProvider theme={ theme }>
      <Container className="base-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/result" element={ <ResultPage /> } />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
