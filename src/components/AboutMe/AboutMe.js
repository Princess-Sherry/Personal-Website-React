import React from "react";
import { AboutMeWrapper, AboutMeTitle } from "./styles";
import Highlight from "components/Styles/Highlight";

const AboutMe = () => (
  <AboutMeWrapper>
    <AboutMeTitle>
      About <Highlight>Me</Highlight>
    </AboutMeTitle>
    <p>
      Usagi Tsukino is a careless fourteen-year-old girl with an enormous
      capacity for love, compassion, and understanding. Usagi transforms into
      the heroine called Sailor Moon, the Guardian of Love and Justice.
    </p>
  </AboutMeWrapper>
);

export default AboutMe;
