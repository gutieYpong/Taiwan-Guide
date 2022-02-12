import React from "react";
import styled, { css } from "styled-components";

import { fontLayout } from "../../constants/api";


/**
 * ... search suggestion ...
 */

const SuggestionBox = styled.div`
  /* opacity: ${ ({ isFocus }) => ( isFocus ? 1 : 0 ) } ; */

  /* Ignore all events of this DOM and its children */
  pointer-events: none;

  /* Layout */
  position: absolute;
  width: 100%;
  height: calc( 36.8rem - 6.4rem ); // diff btw height of '.search-input-div &:focus-within' & 'input'
  top: 6.4rem;
  display: ${ ({ isFocus }) => ( isFocus ? "flex" : "none" ) } ;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.4rem 3.2rem 3.2rem 2.4rem;

  &::before {
    /* Layout of that line under input box */
    position: absolute;
    content: "";
    width: 54.6rem;
    height: .05rem;
    top: 0;
    left: calc( (56.4rem - 54.6rem) / 2 ); // width of diff between .search-div & this, divided by 2
    background-color: ${ ({ theme }) => theme.palette.neutral.main };
  }
`;

const Title = styled.span`
  width: 100%;
  height: 1.6rem;

  letter-spacing: 0.05em;
  ${ ({ theme }) => fontLayout('Open Sans', 'normal', 'normal', '1.2rem', '1.6rem', theme.palette.neutral.lightest) }
`;


/**
 * ... category related components ...
 */
const CategoryBox = styled.div`
  width: 100%;
  height: 6.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CategoryBtnBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const CategoryBtn = styled.button( ({ isFocus, theme }) => {
  return css`
    /* Bring back the event response in these options */
    pointer-events: ${ isFocus ? "auto" : "none" }; 

    width: 8.1rem;
    height: 3rem;
    border: .05rem solid ${ theme.palette.neutral.main };
    border-radius: .5rem;
    background-color: inherit;
    cursor: pointer;

    letter-spacing: 0.05em;
    ${ fontLayout('Open Sans', 'normal', 'normal', '1.6', '2.2', theme.palette.neutral.main) }

    &:hover {
      border: .05rem solid ${ theme.palette.primary.main };
      color: ${ theme.palette.primary.main };
    }
    &:active {
      background-color: ${ theme.palette.primary.main };
      color: ${ theme.palette.white };
    }
`});

const SearchSuggestionCategory = ({ isFocus }) => {
  return (
    <CategoryBox>
      <Title children="想搜尋的類別" />
      <CategoryBtnBox>
        <CategoryBtn isFocus={ isFocus } children="景點" />
        <CategoryBtn isFocus={ isFocus } children="美食" />
        <CategoryBtn isFocus={ isFocus } children="活動" />
      </CategoryBtnBox>
    </CategoryBox>
  )
}


/**
 * ... keyword related components ...
 */
const KeywordBox = styled.div`
  width: 100%;
  height: 16.2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const KeywordOptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
`;

const KeywordOption = styled.span( ({ isFocus, theme }) => {
  return css`
    /* Bring back the event response in these options */
    pointer-events: ${ isFocus ? "auto" : "none" }; 

    width: 100%;
    height: 2.2rem;
    cursor: pointer;

    letter-spacing: 0.05em;
    ${ fontLayout('Open Sans', 'normal', 'normal', '1.6rem', '2.2rem', theme.palette.neutral.main) }
    &:hover {
      color: ${ theme.palette.primary.main };
    }
`});

const SearchSuggestionList = ({ isFocus }) => {
  return (
    <KeywordBox>
      <Title children="熱門關鍵字" />
      <KeywordOptionBox>
        <KeywordOption isFocus={ isFocus } children="澎湖花火節" />
        <KeywordOption isFocus={ isFocus } children="親子露營" />
        <KeywordOption isFocus={ isFocus } children="北投溫泉旅館" />
      </KeywordOptionBox>
    </KeywordBox>
  )
}


//* ... export component ...
const Suggestion = ({ isFocus }) => {
  return (
    <>
      <SuggestionBox isFocus={ isFocus }>
        <SearchSuggestionCategory isFocus={ isFocus } />
        <SearchSuggestionList isFocus={ isFocus } />
      </SuggestionBox>
    </>
  )
}

export default Suggestion;