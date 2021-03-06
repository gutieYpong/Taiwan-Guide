import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import styled from "styled-components";

import { setCateSelector } from '../../../features/layoutSlice';
import { fetchData } from '../../../features/tourismSlice';
import { fontLayout, CATEGORY_FILTER_API } from "../../../constants/api";
import { EXPLORE_LIST } from "../../../constants/common";
import { ArrowIcon } from "../../../assets";
import { size } from '../../../constants/breakpoints';


const Container = styled.section`
  width: 100%;
  height: 100%;
  max-height: 106rem;
  display: grid;
  justify-items: center;
  background-color: ${ ({ theme }) => theme.palette.white };
`;

const ExploreWrapper = styled.div`
  width: 100%;
  max-width: 144rem;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 15rem 0 17rem 0;
  overflow: hidden;
`;

const InnerExplore = styled.div`
  width: 90%;
  max-width: 129rem;
  height: 74rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 1.6rem;
  background-color: white;
`;

const ExploreTopContent = styled.div`
  width: 100%;
  height: 35rem;
  display: flex;
  gap: 3.2rem;

  /* border: 1px solid gray; */
`;

const ExploreDesc = styled.div`
  /* flex: 1; */
  width: 51.4rem;
  /* width: auto; */
  /* max-width: 51.4rem; */
  height: 27.8rem;

  /* border: 1px solid cyan; */

  p:nth-child(1) {
    margin: 0;

    ${ ({ theme }) => fontLayout('Open Sans', 'normal', '600', '4.8rem', '6.5rem', theme.palette.primary.main) }
  }
  p:nth-child(2) {
    margin: 0;
    letter-spacing: 0.1em;

    ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '4.8rem', '7.1rem', theme.palette.neutral.main) }
  }
  p:nth-child(3) {
    margin: 1.6rem 0 3.2rem 0;
    letter-spacing: 0.1em;

    ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '1.6rem', '2.3rem', theme.palette.neutral.main) }
  }
  span {
    letter-spacing: 0.15em;

    ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'bold', '1.6rem', '2.4rem', theme.palette.primary.main) }
  }
  svg { // ArrowIcon
    margin-left: .8rem;
    cursor: pointer;
    transition: margin-left .5s ease;

    &:hover {
      margin-left: 1.6rem;
    }
  }
`;

const ExploreTopRightContent = styled.div`
  display: flex;
  gap: 1.4rem;
  margin-right: -11.9rem;
`;

const ExploreBottomContent = styled.div`
  width: auto;
  max-width: 114rem;
  height: 35rem;
  display: flex;
  gap: 1.4rem;
  margin: 2rem 7.6rem 0 auto;
`;

const ExploreImgBox = styled.div`
  width: 27.3rem;
  height: 35rem;
  display: flex;
  gap: .4rem;
  
  div {
    width: 25.1rem;
    height: 35rem;
    border-radius: .5rem;
    overflow: hidden;
    cursor: pointer;
    
    img {
      width: 100%;
      height: 100%;
      transition: transform .4s;
      object-fit: cover;
  
      &:hover {
        transform: scale(1.2);
        transform-origin: 50% 50%;
      }
    }
  }
  span {
    /* width: 1.8rem; */
    letter-spacing: 0.15em;
    writing-mode: vertical-rl;
    text-orientation: upright;
    padding-top: .4rem;
    text-align: start;
    
    ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '1.6rem', '2rem', theme.palette.primary.main) }
  }
`;

const ExploreImg = ({ Item }) => {
  return (
    <ExploreImgBox>
      <div>
        <img src={ Item.img_src } alt={ Item.img_name } />
      </div>
      <span>{ Item.img_name }</span>
    </ExploreImgBox>
  )
};


const Explore = props => {
  const dispatch = useDispatch();

  return (
    <Container aria-label="explore">
      <ExploreWrapper>
        <InnerExplore>
          <ExploreTopContent>
            <ExploreDesc>
              <p>Explore</p>
              <p>????????????????????????</p>
              <p>?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
              <Link
                to="/scenicSpot"
                onClick={ () => {
                  dispatch(fetchData({
                    url: CATEGORY_FILTER_API('ScenicSpot'),
                    cateType: 'scenicSpot',
                  }));
                  dispatch( setCateSelector('scenicSpot') );
                }}
                style={{ textDecoration: 'none' }}
              >
                <span>??????????????????</span><ArrowIcon/>
              </Link>
            </ExploreDesc>
            <ExploreTopRightContent>
              <ExploreImg Item={ EXPLORE_LIST[0] } />
              <ExploreImg Item={ EXPLORE_LIST[1] } />
              <ExploreImg Item={ EXPLORE_LIST[2] } />
            </ExploreTopRightContent>
          </ExploreTopContent>
          <ExploreBottomContent>
            <ExploreImg Item={ EXPLORE_LIST[3] } />
            <ExploreImg Item={ EXPLORE_LIST[4] } />
            <ExploreImg Item={ EXPLORE_LIST[5] } />
            <ExploreImg Item={ EXPLORE_LIST[6] } />
          </ExploreBottomContent>
        </InnerExplore>
      </ExploreWrapper>
    </Container>
  );
}

export default Explore;
