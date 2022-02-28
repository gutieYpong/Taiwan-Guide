import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";

import Filter from "./Filter";
import Content from "./Content";


const Container = styled.section`
  width: 100%;
  height: auto;
  min-height: calc(100vh - 6.4rem - 10.9rem - 6.2rem - 6.8rem);
  max-height: 155.3rem;
  display: grid;
  justify-items: center;
  background-color: ${ ({ theme }) => theme.palette.neutral.lightest };
`;

const MainWrapper = styled.div`
  width: 100%;
  max-width: 114rem; // 27.3 + 85.1 + 1.6 = 114
  height: auto;
  display: grid;
  grid-template-columns: 27.3rem 85.1rem;
  gap: 1.6rem;
`;

const Main = props => {
  const params = useParams();
  const _cateSelector = params.cateSelector;

  useEffect(() => {
    // dispatch( setCateSelector(_cateSelector) )
    return () => {
    };
  }, []);

  return (
    <Container aria-label="search-result__content">
      <MainWrapper>
        <Filter CateSelector={ _cateSelector } />
        <Content CateSelector={ _cateSelector } />
        {/* <NoResultFound /> */}
        {/* <WebsiteFailure /> */}
      </MainWrapper>
    </Container>
  )
}

export default Main;