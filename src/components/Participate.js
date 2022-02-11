import { useState } from "react";
import styled from "styled-components";
import { Colors } from "../constants/colors.config";
import { PARTICIPATE_IMAGES } from "../constants/common";

const Container = styled.div`
  display: inline-block;
  width: 100%;
  height: 780px;
  background-color: #FAFAFA;
`;

const InnerParticipate = styled.div`
  width: 1290px;
  max-width: 100%;
  height: 430px;
  margin: 160px 150px 190px 0;
  display: flex;

  /* background-color: pink; */
  .participate-image-div {
    width: 851px;
    height: 100%;

    .participate-image {
      width: 100%;
      height: 100%;
    }
  }
`;

const ParticipateRight = styled.div`
  width: 482px;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-left: 32px;

  /* background-color: cyan; */
`;

const ParticipateDesc = styled.div`
  width: 418px;
  height: 100%;

  /* background-color: orange; */

  p:nth-child(1) {
    width: 100%;
    height: 65px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 65px;
    color: ${ Colors.primary.green };
    margin-top: 0;
    margin-bottom: 0;

    /* background-color: pink; */
  }
  p:nth-child(2) {
    width: 100%; // docs: 418px
    height: 71px;

    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 71px;
    letter-spacing: 0.08em;
    color: ${ Colors.neutral.grey };
    margin-top: 0;
    margin-bottom: 0;

    /* background-color: yellow; */
  }
  p:nth-child(3) {
    width: 100%;
    height: 48px;
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.15em;
    color: ${ Colors.neutral.grey };
    margin-top: 16px;
  }

  ul {
    padding-inline-start: 0;

    li {
      position: relative;
      font-family: "Open Sans";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0.15em;
      color: ${ Colors.primary.green };
      list-style: none;
      margin-top: 32px;
      padding-left: 10px;

      &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 0.5px;
        top: -16px;
        left: 0px;
        background-color: ${ Colors.primary.green };
      }

      &:hover {
        cursor: pointer;
        &::after {
          opacity: 1;
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          background-color: #F1D675;
          border-radius: 4px;
          top: 7px;
          left: 163px;
        }
      }
    }

    /* cancel the 1st line */
    li:nth-child(1) {
      &::before {
        width: 0;
        height: 0;
      }
    }
  }
`;


const Participate = ( props ) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Container>
      <InnerParticipate>
        <div className="participate-image-div">
          <img className="participate-image" src={ process.env.PUBLIC_URL + `/static/image/index_participate/${ PARTICIPATE_IMAGES[selectedIndex] }` } alt="" style={{ borderRadius: '0px 5px 5px 0px' }} />
        </div>
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
