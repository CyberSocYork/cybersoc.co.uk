import React from "react";
import styled from "styled-components";
import { FaTwitter, FaFacebookF, FaDiscord } from "react-icons/fa";

import { TextLink } from "./TextLink";

import { color, breakpoint } from "~/theme/config";

// Lefthand-side social links in the footer.
const footerSocials = [
  { to: "https://twitter.com/CyberSocYork", icon: <FaTwitter /> },
  { to: "https://facebook.com/CyberSocYork", icon: <FaFacebookF /> },
  { to: "https://bit.ly/CyberSocDiscord", icon: <FaDiscord /> },
];

// Righthand-side page links in the footer.
const footerLinks = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/contact", text: "Contact" },
];

const StyledFooter = styled.footer`
  position: relative;
  background-color: ${color.secondary};
  padding: 2em 0;

  ${breakpoint.md} {
    font-size: 0.8rem;
  }
`;

const SocialLink = styled(TextLink)`
  margin-right: 1em;

  &:last-child {
    margin-right: 0;
  }
`;

const FooterLinkList = styled.ul`
  list-style: none;
  padding: 0;

  ${breakpoint.md} {
    margin: 0;
  }
`;

const FooterLink = styled.li`
  margin-bottom: 0.25em;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: "> ";
  }
`;

export const Footer = () => (
  <StyledFooter>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-10">
          <p>© 2021 Ben Silverman</p>
          {footerSocials &&
            footerSocials.map((item) => (
              <SocialLink to={item.to} key={item.to}>
                {item.icon}
              </SocialLink>
            ))}
        </div>
        <div className="col-12 col-md-2">
          {footerLinks && (
            <FooterLinkList>
              {footerLinks.map((item) => (
                <FooterLink key={item.text}>
                  <TextLink to={item.to}>{item.text}</TextLink>
                </FooterLink>
              ))}
            </FooterLinkList>
          )}
        </div>
      </div>
    </div>
  </StyledFooter>
);
