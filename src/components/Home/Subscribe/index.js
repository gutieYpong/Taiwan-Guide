import styled from "styled-components";

import { fontLayout } from "../../../constants/api";
import { SubscribeImg, SendIcon } from "../../../assets";


const Container = styled.section`
  width: 100%;
  height: 100%;
  max-height: 62rem;
  display: grid;
  justify-items: center;
  background-color: ${ ({ theme }) => theme.palette.primary.main };
`;

const SubscribeWrapper = styled.div`
  width: 100%;
  max-width: 144rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerSubscribe = styled.div`
  width: 114rem;
  height: 30rem;
  display: flex;
  gap: 3.2rem;
`;

const SubscribeImgBox = styled.div`
  flex-basis: 49.3%;

  img {
    width: 100%;
    height: 100%;
    border-radius: .5rem;
    object-fit: cover;
  }
`;

const SubscribeDesc = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const SubscribeDescTop = styled.div`
  p:nth-child(1) {
    margin: 0;

    ${ ({ theme }) => fontLayout('Open Sans', 'normal', '600', '4.8rem', '6.5rem', theme.palette.auxiliary.yellow) }
  }
  p:nth-child(2) {
    margin: 0;
    letter-spacing: 0.08em;

    ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', '500', '4.8rem', '7.1rem', theme.palette.white) }
  }
`;

const SubscribeDescBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;

  p {
    margin: 0;
    letter-spacing: 0.15em;

    ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', '400', '1.6rem', '2.3rem', theme.palette.white) }
  }
`;

const SubscribeEmailDiv = styled.div`
  position: relative;
  width: 51.4rem;
  height: 7.8rem;

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 2.8rem 3.0rem 2.8rem 2.4rem;

    border: .05rem solid rgba(255, 255, 255, 0.5);
    border-radius: .5rem;
    background-color: transparent;
    
    letter-spacing: 0.05em;
    ${ ({ theme }) => fontLayout('Open Sans', 'normal', 'normal', '1.6rem', '2.2rem', theme.palette.white) }

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    &:focus {
      outline: none;
    }
  }
  &:hover {
    border: .05rem solid ${ ({ theme }) => theme.palette.white };
    box-shadow: 0 0 .4rem rgba(255, 255, 255, 0.5), inset 0 0 .4rem rgba(255, 255, 255, 0.5);
    border-radius: .5rem;
  }
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2.5rem;

    path {
      fill: rgba(255, 255, 255, 0.5);
      stroke: rgba(255, 255, 255, 0.5);
    }
    &:hover {
      cursor: pointer;
      path {
        fill: ${ ({ theme }) => theme.palette.white };
      }
    }
  }
`;

const Subscribe = props => {
  return (
    <Container aria-label="subscribe-box">
      <SubscribeWrapper>
        <InnerSubscribe>
          <SubscribeImgBox>
            <img src={ SubscribeImg } alt="subscribe" />
          </SubscribeImgBox>
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
      </SubscribeWrapper>
    </Container>
  );
}

export default Subscribe;
