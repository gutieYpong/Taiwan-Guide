import styled from "styled-components";

import { Colors } from "../constants/colors.config";
import { SendIcon } from "../constants/svg";


const Container = styled.div`
  width: 100%;
  height: 620px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${ Colors.primary.green };
`;

const InnerSubscribe = styled.div`
  width: 1140px;
  height: 300px;
  display: flex;

  /* background-color: cyan; */
`;

const SubscribeImg = styled.div`
  flex-basis: 49.3%;

  background-color: pink;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    /* object-fit: cover; */
  }
`;

const SubscribeDesc = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
`;

const SubscribeDescTop = styled.div`
  flex: 1;
  width: 514px;
  height: 100%; // docs: 136px
  margin: 0;

  /* background-color: orange; */
  p:nth-child(1) {
    width: 100%;
    height: 65px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 65px;
    color: ${ Colors.auxiliary.yellow };
    margin: 0 auto;

    /* background-color: pink; */
  }
  p:nth-child(2) {
    width: 100%; // docs: 418px
    height: 71px;

    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 71px;
    letter-spacing: 0.08em;
    color: ${ Colors.white };
    margin: 0 auto;

    /* background-color: yellow; */
  }
`;

const SubscribeDescBottom = styled.div`
  flex: 1;

  /* background-color: yellow; */
  p {
    width: 100%; // docs: 418px
    height: 24px;

    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.15em;
    color: ${ Colors.white };
    margin: 0 auto 27px auto;
  }
`;

const SubscribeEmailDiv = styled.div`
  width: 514px;
  height: 78px;
  position: relative;

  /* background-color: pink; */
  input {
    /* Layout */
    position: absolute;

    width: 100%;
    height: 100%;
    padding: 28px 30px 28px 24px;

    border: 0.5px solid rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    border-radius: 5px;
    background-color: transparent;

    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.05em;
    color: ${ Colors.white };

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    /* &:hover {
      border: 0.5px solid #FFFFFF;
      box-sizing: border-box;
      box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.5), inset 0px 0px 4px rgba(255, 255, 255, 0.5);
      border-radius: 5px;
    } */
    &:focus {
      outline: none;
    }
  }

  &:hover {
    border: 0.5px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.5), inset 0px 0px 4px rgba(255, 255, 255, 0.5);
    border-radius: 5px;
  }

  svg {
    position: absolute;
    top: 23px;
    right: 25px;

    &:hover {
      cursor: pointer;
      path {
        fill: ${ Colors.white };
      }
    }
  }
`;

const Subscribe = ( props ) => {
  return (
    <Container>
      <InnerSubscribe>
        <SubscribeImg>
          <img src={ process.env.PUBLIC_URL + '/static/image/subscribe.jpeg' } alt="subscribe" />
        </SubscribeImg>
        <SubscribeDesc>
          <SubscribeDescTop>
            <p>Subscribe</p>
            <p>每個月來場放鬆旅行</p>
          </SubscribeDescTop>
          <SubscribeDescBottom>
            <p>如果你願意收到每月旅遊資訊，一起感受台灣旅行的美好。</p>
            <SubscribeEmailDiv>
              <input type="text" placeholder="youremail@example.com" />
              <SendIcon />
            </SubscribeEmailDiv>
          </SubscribeDescBottom>
        </SubscribeDesc>
      </InnerSubscribe>
    </Container>
  );
}

export default Subscribe;
