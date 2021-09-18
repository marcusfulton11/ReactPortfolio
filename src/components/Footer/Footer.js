import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  background-image: url(footer_wave.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;
    background-color: #787878;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span>
          {" "}
          <a
            href="https://github.com/marcusfulton11//"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>{" "}
        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;
