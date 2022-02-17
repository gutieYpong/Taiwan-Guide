import React from "react";
import styled from "styled-components";

import { fontLayout } from "../../../constants/api";
import { Dropdown } from "../../../stories/mine/Dropdown";
import { CITY_LIST } from "../../../constants/common";


const Container = styled.div`
  /* grid-area: search; */
  width: 100%;
  max-width: 144rem;
  height: 100%;
  max-height: 10.9rem;
  display: flex;
  justify-content: center;
  padding: 4.5rem 15rem 1.6rem 15rem;
  background-color: ${ ({ theme }) => theme.palette.white };
`;

const SearchWrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 27.3rem 85.1rem;
  grid-column-gap: 1.6rem;
`;

const Title = styled.div`
  position: relative;
  width: auto;
  height: auto;
  padding-left: 1.6rem;

  letter-spacing: .08em;
  ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', '500', '2.8rem', '4.1rem', theme.palette.neutral.main) }

  &::before {
    position: absolute;
    content: "首頁 / 搜尋結果";
    top: -2.275rem; // estimate
    left: 1.6rem;

    letter-spacing: .05em;
    ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '1.4rem', '2rem', theme.palette.neutral.light) }
  }
`;

const SearchBar = styled.div`
  width: 100%;
  height: 100%;
  max-height: 4.6rem;
  display: flex;
  gap: 1.6rem;
  align-items: center;


  /* background-color: lightblue; */
`;

const KeywordInput = styled.div`
  /* width: 36.8rem; */
  flex: 1;
  height: 100%;

  input[type='text'] {
    width: 100%;
    height: 100%;
    border: .05rem solid ${ ({ theme }) => theme.palette.neutral.main };
    border-radius: .5rem;
    padding: 0 2.4rem;
    outline: 0;
  
    &::placeholder {
      letter-spacing: 0.05em;
      ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '1.4rem', '2rem', theme.palette.neutral.little) };
    }
  }
`;

const SearchBtn = styled.button`
  width: 8.3rem;
  height: 100%;
  background-color: ${ ({ theme }) => theme.palette.primary.light };
  border: .05rem solid ${ ({ theme }) => theme.palette.white };
  border-radius: .5rem;
  cursor: pointer;
  
  letter-spacing: 0.05em;
  ${ ({ theme }) => fontLayout('Open Sans', 'normal', '600', '1.4rem', '1.9rem', theme.palette.white) };
`;

const Search = props => {
  return (
    <Container>
      <SearchWrapper>
        <Title children="你目前正在搜索" />
        <SearchBar>
          <KeywordInput>
            <input type="text" placeholder="輸入關鍵字" />
          </KeywordInput>
          <Dropdown CITY_LIST={ CITY_LIST } style={{ flex: 1, height: '100%' }} />
          <SearchBtn children="搜尋" />
        </SearchBar>
      </SearchWrapper>
    </Container>
  )
}

export default Search;