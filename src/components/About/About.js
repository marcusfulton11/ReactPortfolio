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
            i decided to try and learn C#. At the time i didnt realise that it was possible
            to learn and teach myself these things online with no degree or classroom needed.
            I then spoke to my cousin (who happens to be a senior dev), which led me on
            a path to learn HTML, CSS and Javascript. Now over two years down the line my hobby has become
            an obsession that I LOVE doing every day.

        
          </div>
          <div className="AboutBio tagline2">
          <strong>Technologies</strong>
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
