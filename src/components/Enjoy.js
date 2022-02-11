import styled from "styled-components";
import EnjoyCarousel from "./EnjoyCarousel";
import { Colors } from "../constants/colors.config";
import { ArrowIcon } from "../constants/svg";

const Container = styled.div`
  width: 100%; // docs: 1440px
  height: 896px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${ Colors.white };
`;

const InnerEnjoyTop = styled.div`
  width: 75%; // docs: 1076px
  height: 136px;
  display: flex;
  justify-content: space-between;
  margin-top: 160px;
  margin-bottom: 40px;

  /* background-color: pink; */
`;

const EnjoyTopLeft = styled.div`
  width: 418px;
  height: 100%;

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
`;

const EnjoyTopRight = styled.div`
  width: 528px;
  height: 100%;
  
  /* background-color: cyan; */

  p {
    width: 100%;
    height: 72px;
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.15em;
    color: ${ Colors.neutral.grey };
    margin-top: 0;
  }
  div {
    white-space: nowrap;

    span {
      width: 120px; // docs: 108px
      height: 24px;

      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;

      /* text-align: center; */
      letter-spacing: 0.15em;
      color: ${ Colors.primary.green };
      margin-top: 24px;
      margin-right: 8px;
      margin-left: 340px;

      /* background-color: purple; */
    }
  }
`;

const InnerEnjoyDown = styled.div`
  width: 100%;
  height: 400px;

  /* background-color: gray; */
`;

const Enjoy = ( props ) => {
  return (
    <Container>
      <InnerEnjoyTop>
        <EnjoyTopLeft>
          <p>Enjoy</p>
          <p>享受在地獨特風味</p>
        </EnjoyTopLeft>
        <EnjoyTopRight>
          <p>充斥在台灣大街小巷的在地美食，融合當地生活與文化特色，發展出各式各樣風味，從銅板小吃到精緻料理，數不清的美味讓你飽餐一頓。</p>
          <div>
            <span>享用更多美食</span>
            <ArrowIcon />
          </div>
        </EnjoyTopRight>
      </InnerEnjoyTop>
      <InnerEnjoyDown>
        <EnjoyCarousel />
      </InnerEnjoyDown>
    </Container>
  );
}


export default Enjoy;
