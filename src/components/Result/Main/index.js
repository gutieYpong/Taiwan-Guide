import styled from "styled-components";

import Filter from "./Filter";
import Content from "./Content";
import { NoResultFound, WebsiteFailure } from "./ErrorResponse";
import { fontLayout } from "../../../constants/api";


const Container = styled.div`
  width: 100%;
  max-width: 144rem;
  height: auto;
  min-height: calc(100vh - 6.4rem - 10.9rem - 6.2rem - 6.8rem);
  max-height: 155.3rem;
  display: flex;
  justify-content: center;
  padding: 0 15rem 0 15rem;
  background-color: ${ ({ theme }) => theme.palette.neutral.lightest };
`;

const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 27.3rem 85.1rem;
  gap: 1.6rem;
`;

const Main = props => {
  return (
    <Container>
      <MainWrapper>
        <Filter />
        <Content />
        {/* <NoResultFound /> */}
        {/* <WebsiteFailure /> */}
      </MainWrapper>
    </Container>
  )
}

export default Main;