import { useState } from "react";
import styled from "styled-components";

import { fontLayout } from "../../../constants/api";
import { PARTICIPATE_IMAGES } from "../../../constants/common";


const Container = styled.div`
  width: 100%;
  max-width: 144rem;
  height: 100%;
  max-height: 78rem;
  padding: 16rem 0 19rem 0;
  background-color: ${ ({ theme }) => theme.palette.neutral.lightest };
`;

const InnerParticipate = styled.div`
  width: 129rem;
  max-width: 129rem;
  height: 43rem;
  display: flex;
  gap: 3.2rem;

  img {
    width: 85.1rem;
    height: 100%;
    border-radius: 0 .5rem .5rem 0;
  }
`;

const ParticipateRight = styled.div`
  width: 48.2rem;
  height: 100%;
  display: flex;
  justify-content: center;

  /* background-color: cyan; */
`;

const ParticipateDesc = styled.div`
  width: 418px;
  height: 100%;

  /* background-color: orange; */

  p:nth-child(1) {
    margin: 0;
    
    ${ ({ theme }) => fontLayout('Open Sans', 'normal', '600', '4.8rem', '6.5rem', theme.palette.primary.main) }
  }
  p:nth-child(2) {
    margin: 0;
    letter-spacing: 0.08em;

    ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '4.8rem', '7.1rem', theme.palette.neutral.main) }
  }
  p:nth-child(3) {
    margin: 1.6rem 0 0 0;
    letter-spacing: 0.15em;

    ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '1.6rem', '2.3rem', theme.palette.neutral.main) }
  }

  ul {
    padding-inline-start: 0;

    li {
      position: relative;
      letter-spacing: 0.15em;
      list-style: none;
      margin-top: 3.2rem;
      padding-left: 1rem;

      ${ ({ theme }) => fontLayout('Open Sans', 'normal', '400', '1.6rem', '2.2rem', theme.palette.primary.main) }

      &:not(:nth-child(1))::before {
        position: absolute;
        content: "";
        width: 100%;
        height: .05rem;
        top: -1.6rem;
        left: 0;
        background-color: ${ ({ theme }) => theme.palette.primary.main };
      }
      &:hover {
        cursor: pointer;
        &::after {
          position: absolute;
          content: "";
          width: .8rem;
          height: .8rem;
          background-color: ${ ({ theme }) => theme.palette.auxiliary.yellow };
          top: 50%;
          transform: translateY(-50%);
          left: 16.3rem;
          border-radius: .4rem;
          opacity: 1;
        }
      }
    }
  }
`;

const Participate = props => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Container>
      <InnerParticipate>
        <img src={ PARTICIPATE_IMAGES[selectedIndex] } alt={`participate-${selectedIndex}`} />
        <ParticipateRight>
          <ParticipateDesc>
            <p>Participate</p>
            <p>體驗當地風情人文</p>
            <p>台灣擁有豐富文俗風情，因地貌多變延伸出豐富的主題活動，邀請你體驗文化的精彩。</p>
            <ul>
              <li onMouseEnter={ () => setSelectedIndex( 1 ) }>一年一度精采盛事</li>
              <li onMouseEnter={ () => setSelectedIndex( 2 ) }>追逐自由單車旅程</li>
              <li onMouseEnter={ () => setSelectedIndex( 3 ) }>親自踏上山海之旅</li>
              <li onMouseEnter={ () => setSelectedIndex( 4 ) }>體驗台灣文化慶典</li>
            </ul>
          </ParticipateDesc>
        </ParticipateRight>
      </InnerParticipate>
    </Container>
  );
}

export default Participate;
