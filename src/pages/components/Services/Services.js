import flash from "assets/images/flash.jpeg";
import jupiter from "assets/images/jupiter.jpeg";
import mars from "assets/images/mars.jpeg";
import mercury from "assets/images/mercury.jpeg";
import pen from "assets/images/pen.jpeg";
import stick from "assets/images/stick.jpeg";
import Service from "components/Service";
import Highlight from "components/Styles/Highlight";
import PageContentColumn from "components/Styles/PageContentColumn";
import PageTitle from "components/Styles/PageTitle";
import TeamMember from "components/TeamMember/TeamMember";
import React from "react";
import "./Services.css";

const Services = () => (
  <div class="Services">
    <PageTitle>Services</PageTitle>
    <PageContentColumn>
      <MyServices />
      <Team />
    </PageContentColumn>
  </div>
);

const MyServices = () => (
  <div class="MyServices">
    <h3 class="MyServices__title">
      My <Highlight>Services</Highlight>
    </h3>
    <div class="MyServices__items">
      <Service
        logo={stick}
        name="Moon Stick"
        description='The "Moon Stick" is an item used by Sailor Moon in the first season of the 90s anime. She used this item to perform the Moon Healing Escalation attack.'
      ></Service>
      <Service
        logo={flash}
        name="Moon Twilight Flash"
        description='"Moon Twilight Flash" is a moonlight-based attack used by Sailor Moon in the manga, video games, and PGSM.'
      ></Service>
      <Service
        logo={pen}
        name="Disguise Pen"
        description='The "Disguise Pen" is a pen that was given to Usagi by Luna, so she could disguise herself in order to complete a mission more easily.'
      ></Service>
    </div>
  </div>
);

const Team = () => (
  <div className="Team">
    <h3 className="Team__title">Team</h3>
    <div className="Team__members">
      <TeamMember avatar={mercury} name="Sailor Mercury"></TeamMember>
      <TeamMember avatar={mars} name="Sailor Mars"></TeamMember>
      <TeamMember avatar={jupiter} name="Sailor Jupiter"></TeamMember>
    </div>
  </div>
);

export default Services;
