import Experience from "components/Experience";
import PageContentColumn from "components/Styles/PageContentColumn";
import PageTitle from "components/Styles/PageTitle";
import {
    Timeline,
    TimelineContent,
    TimelineTitle
} from "components/Styles/Timeline";
import React from "react";
import "./Resume.css";

const Resume = () => (
  <div class="Resume">
    <PageTitle>RESUME</PageTitle>
    <PageContentColumn>
      <Experiences />
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

export default Resume;
