import styled from "styled-components";

import { fontLayout } from "../constants/api";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "../assets";


const Container = styled.footer`
  /* grid-area: ${ ({ GridArea }) => GridArea ? 'footer' : 'auto' }; */
  width: 100%;
  height: 100%;
  max-height: 6.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${ ({ theme }) => theme.palette.white };
  z-index: 4;
`;

const FooterLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0 .5rem 0 0;
    ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', '500', '1.6rem', '2.3rem', theme.palette.neutral.main) }
  }
  svg {
    path {
      fill: ${ ({ theme }) => theme.palette.neutral.little };
    }
    &:hover {
      cursor: pointer;
      path {
        fill: ${ ({ theme }) => theme.palette.neutral.main };
      }
    }
  }
`;

const FooterCenter = styled.div`
  flex: 2;

  p {
    margin: 0;
    text-align: center;

    ${ ({ theme }) => fontLayout('Open Sans', 'normal', 'normal', '1.2rem', '3rem', theme.palette.neutral.little) }
  }
`;

const FooterRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;

  span {
    letter-spacing: 0.05em;

    ${ ({ theme }) => fontLayout('Open Sans', 'normal', '600', '1.4rem', '1.9rem', theme.palette.neutral.light) }
    
    // ! The language options feature has not finished yet
    &:hover {
      cursor: pointer;
    }
  }
`;

const Footer = ({ GridArea, ...props }) => {
  return (
    <Container GridArea={ GridArea } {...props}>
      <FooterLeft>
        <p>Follow us</p>
        <FacebookIcon />
        <InstagramIcon />
        <YoutubeIcon />
      </FooterLeft>
      <FooterCenter>
        <p>Copyright © 2022 TRAVEL. All rights reserved - UI: Lola , Web: gutiepong.</p>
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
