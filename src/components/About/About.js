import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="bitmoji.png"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Marcus Fulton</strong> and my passion is
            building things that live on the internet. My interest in web
            development started in 2019 when 
            I decided to try and learn some c#. At the time i didnt realise that is was possible
            to learn and teach myself these things online with no degree or class room needed.
            I then spoke to my cousin lead me on
            a path to learn HTML, CSS and Javascript. Over two years down the line and a hobbie has become
            and obsession that i LOVE doing every day.
        
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
