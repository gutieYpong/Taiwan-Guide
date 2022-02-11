import styled from "styled-components";

import { Colors } from "../constants/colors.config";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "../constants/svg";

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${ Colors.white };
`;

const FooterLeft = styled.div`
  width: 254px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  p {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: ${ Colors.neutral.grey };
    margin: 0 5px 0 0;
  }

  svg:hover {
    cursor: pointer;
    path {
      fill: ${ Colors.neutral.grey };
    }
  }
`;

const FooterCenter = styled.div`
  width: 633px;
  height: 30px;
  flex: 2;

  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 30px;
    text-align: center;
    color: ${ Colors.neutral.littlegrey };
    margin: 0;
  }
`;

const FooterRight = styled.div`
  width: 106px;
  height: 30px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.05em;
    color: ${ Colors.neutral.lightgrey };
    margin-right: 18px;
  }
`;

// ! The language options feature has not finished yet
const Footer = ( props ) => {
  return (
    <Container>
      <FooterLeft>
        <p>Follow us</p>
        <FacebookIcon />
        <InstagramIcon />
        <YoutubeIcon />
      </FooterLeft>
      <FooterCenter>
        <p>Copyright © 2021 TRAVEL. All rights reserved - UI: Lola , Web: gutiepong.</p>
      </FooterCenter>
      <FooterRight>
        <span style={{ color: '#737373' }}>CH</span>
        <span>EN</span>
        <span>JA</span>
      </FooterRight>
    </Container>
  );
}


export default Footer;
