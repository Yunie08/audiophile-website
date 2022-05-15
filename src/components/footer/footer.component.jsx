import {
  FooterContainer,
  FooterLayoutContainer,
  ContactContainer,
  Socials,
  Copyright,
} from "./footer.styles";

import Navigation from "../../routes/navigation/navigation.component";

import { ReactComponent as FacebookLogo } from "../../static/images/shared/desktop/icon-facebook.svg";
import { ReactComponent as TwitterLogo } from "../../static/images/shared/desktop/icon-twitter.svg";
import { ReactComponent as InstragramLogo } from "../../static/images/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLayoutContainer>
        <Navigation />
        <ContactContainer>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <Socials>
            <li>
              <a href="https://www.facebook.com">
                <FacebookLogo />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <TwitterLogo />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <InstragramLogo />
              </a>
            </li>
          </Socials>
        </ContactContainer>
        <Copyright>Copyright 2021. All Rights Reserved</Copyright>
      </FooterLayoutContainer>
    </FooterContainer>
  );
};

export default Footer;
