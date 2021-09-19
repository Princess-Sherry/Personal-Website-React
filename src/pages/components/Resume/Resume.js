import Experience from "components/Experience";
import SkillItem from "components/SkillItem";
import Highlight from "components/Styles/Highlight";
import PageContentColumn from "components/Styles/PageContentColumn";
import PageTitle from "components/Styles/PageTitle";
import { Skill, SkillName } from "components/Styles/Skill";
import {
  Timeline,
  TimelineContent,
  TimelineTitle,
} from "components/Styles/Timeline";
import React from "react";
import "./Resume.css";

const Resume = () => (
  <div class="Resume">
    <PageTitle>RESUME</PageTitle>
    <PageContentColumn>
      <Experiences />
      <Skills />
    </PageContentColumn>
  </div>
);

const Experiences = () => (
  <div className="Resume__Experiences">
    <Timeline>
      <TimelineTitle>Education</TimelineTitle>
      <TimelineContent>
        <Experience
          title="Special course"
          year="2004"
          location=" | Juban Middle School"
          detail='"Juban Public Middle School" is the local middle school in Azabu-Juban and was seen throughout the first 3 seasons of the anime and the first 3 arcs of the manga.'
        ></Experience>
        <Experience
          title="Special course"
          year="2004"
          location=" | Juban Middle School"
          detail='"Juban Public Middle School" is the local middle school in Azabu-Juban and was seen throughout the first 3 seasons of the anime and the first 3 arcs of the manga.'
        ></Experience>
      </TimelineContent>
    </Timeline>
    <Timeline>
      <TimelineTitle>Experience</TimelineTitle>
      <TimelineContent>
        <Experience
          title="Sailor Senshi Leader"
          year="2004"
          location=" | Moon Kingdom"
          detail='"Originally from a prosperous civilization on the Moon known as the Moon Kingdom, she was reborn on Earth and re-awoke as the leader of the Sailor Senshi.'
        ></Experience>
        <Experience
          title="Sailor Senshi Leader"
          year="2004"
          location=" | Moon Kingdom"
          detail='"Originally from a prosperous civilization on the Moon known as the Moon Kingdom, she was reborn on Earth and re-awoke as the leader of the Sailor Senshi.'
        ></Experience>
      </TimelineContent>
    </Timeline>
  </div>
);

const Skills = () => (
  <div className="Resume__Skills">
    <Skill>
      <SkillName>
        Design <Highlight>Skills</Highlight>
      </SkillName>
      <SkillItem name="Supersonic Waves" score="80%"></SkillItem>
      <SkillItem name="Sailor Moon Kick" score="70%"></SkillItem>
      <SkillItem name="Moon Twilight Flash" score="85%"></SkillItem>
    </Skill>
    <Skill>
      <SkillName>
        Coding <Highlight>Skills</Highlight>
      </SkillName>
      <SkillItem name="Mask" score="65%"></SkillItem>
      <SkillItem name="Moon Stick" score="75%"></SkillItem>
      <SkillItem name="Disguise Pen" score="68%"></SkillItem>
    </Skill>
  </div>
);

export default Resume;
