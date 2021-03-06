import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import styled from "styled-components";

import { fetchData, setThemeSelector } from '../../../features/tourismSlice';
import { fontLayout, ACTIVITY_FILTER_API } from "../../../constants/api";
import { PARTICIPATE_IMAGES, DATA_FILTER_OBJECT } from "../../../constants/common";


const Container = styled.section`
  width: 100%;
  height: 100%;
  max-height: 78rem;
  display: grid;
  justify-items: center;
  background-color: ${ ({ theme }) => theme.palette.neutral.lightest };
`;

const ParticipateWrapper = styled.div`
  width: 100%;
  max-width: 144rem;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 16rem 0 19rem 0;
`;

const InnerParticipate = styled.div`
  min-width: 89.58%; // 1290 / 1440 */
  max-width: 129rem;
  height: 43rem;
  display: flex;
  gap: 3.2rem;

  img {
    flex: 1;
    max-width: 85.1rem;
    height: 100%;
    border-radius: 0 .5rem .5rem 0;
  }
`;

const ParticipateRight = styled.div`
  /* width: 36.12%; // 466 / 1290 */
  max-width: 48.2rem;
  height: 100%;
  display: flex;
  justify-content: center;

  /* background-color: cyan; */
`;

const ParticipateDesc = styled.div`
  width: 100%;
  max-width: 41.8rem;
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

    a {
      position: relative;
      display: block;
      text-decoration: none;

      &:not(:nth-child(1))::before {
        position: absolute;
        content: "";
        width: 100%;
        height: .05rem;
        top: -1.6rem;
        left: 0;
        background-color: ${ ({ theme }) => theme.palette.primary.main };
      }

      li {
        position: relative;
        letter-spacing: 0.15em;
        list-style: none;
        margin-top: 3.2rem;
        padding-left: 1rem;
  
        ${ ({ theme }) => fontLayout('Open Sans', 'normal', '400', '1.6rem', '2.2rem', theme.palette.primary.main) }

        &:hover {
          cursor: pointer;
          &::before {
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
  }
`;

const Participate = props => {
  const ITEM_DESC_LIST = ['????????????????????????', '????????????????????????', '????????????????????????', '????????????????????????'];
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Container aria-label="participate">
      <ParticipateWrapper>
        <InnerParticipate>
          <img src={ PARTICIPATE_IMAGES[selectedIndex] } alt={`participate-${selectedIndex}`} />
          <ParticipateRight>
            <ParticipateDesc>
              <p>Participate</p>
              <p>????????????????????????</p>
              <p>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
              <ul>
                {
                  ITEM_DESC_LIST.map((item, index) => (
                    <Link to="/activity"
                      key={`participate-activity-${index}`}
                      onClick={ () => {
                        dispatch(
                          fetchData({
                            url: ACTIVITY_FILTER_API(
                              DATA_FILTER_OBJECT.activity.theme[index].filter.reduce((prev, curr, idx) => {
                                return prev + (idx ? " or " : "") + `Class1 eq '${curr}' or Class2 eq '${curr}'`
                              }, "")),
                              cateType: 'activity'
                          })
                        );
                        dispatch( setThemeSelector({ cateType: 'activity', index: index }) );
                      }}
                    >
                      <li
                        children={ item }
                        onMouseEnter={ () => setSelectedIndex( index + 1 ) }
                      />
                    </Link>
                  ))
                }
              </ul>
            </ParticipateDesc>
          </ParticipateRight>
        </InnerParticipate>
      </ParticipateWrapper>
    </Container>
  );
}

export default Participate;
