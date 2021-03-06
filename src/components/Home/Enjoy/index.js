import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import styled from "styled-components";

import EnjoyCarousel from "./EnjoyCarousel";
import { fetchData } from '../../../features/tourismSlice';
import { fontLayout, CATEGORY_FILTER_API } from "../../../constants/api";
import { ArrowIcon } from "../../../assets";


const Container = styled.section`
  width: 100%; // docs: 1440px
  /* max-width: 144rem; */
  height: 100%;
  max-height: 89.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${ ({ theme }) => theme.palette.white };
  overflow: hidden;
`;

const InnerEnjoyTop = styled.div`
  width: 75%; // docs: 1076px
  max-width: 107.6rem;
  height: 13.6rem;
  display: flex;
  justify-content: space-between;
  margin-top: 16rem;
  margin-bottom: 4rem;
`;

const EnjoyTopLeft = styled.div`
  flex: 1;
  width: auto;
  height: 100%;

  p:nth-child(1) {
    margin: 0;

    ${ ({ theme }) => fontLayout('Open Sans', 'normal', '600', '4.8rem', '6.5rem', theme.palette.primary.main) }
  }
  p:nth-child(2) {
    margin: 0;
    letter-spacing: 0.08em;
    
    ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '4.8rem', '7.1rem', theme.palette.neutral.main) }
  }
`;

const EnjoyTopRight = styled.div`
  width: 52.8rem;
  height: 100%;
  
  /* background-color: cyan; */

  p {
    margin-top: 0;
    
    letter-spacing: 0.15em;
    ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '1.6rem', '2.3rem', theme.palette.neutral.main) }
  }
  a {
    white-space: nowrap;

    span {
      margin: 2.4rem 0 0 34rem;
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
  }
`;

const InnerEnjoyDown = styled.div`
  width: 100%;
  height: 40rem;

  /* background-color: gray; */
`;

const Enjoy = props => {
  const dispatch = useDispatch();
  return (
    <Container aria-label="enjoy">
      <InnerEnjoyTop>
        <EnjoyTopLeft>
          <p>Enjoy</p>
          <p>????????????????????????</p>
        </EnjoyTopLeft>
        <EnjoyTopRight>
          <p>???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
          <Link
            to="/delicacy"
            onClick={ () => {
              dispatch(fetchData({
                url: CATEGORY_FILTER_API('Restaurant'),
                cateType: 'delicacy',
              }));
            }}
            style={{ textDecoration: 'none' }}
          >
            <span>??????????????????</span><ArrowIcon />
          </Link>
        </EnjoyTopRight>
      </InnerEnjoyTop>
      <InnerEnjoyDown>
        <EnjoyCarousel />
      </InnerEnjoyDown>
    </Container>
  );
}


export default Enjoy;
