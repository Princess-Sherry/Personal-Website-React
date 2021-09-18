import Avatar from "components/Avatar";
import React from "react";
import twitter from "assets/icons/twitter.svg";
import facebook from "assets/icons/facebook.svg";
import instagram from "assets/icons/instagram.svg";
import SocialMediaItem from "components/SocialMediaItem";
import {
  HomeHeader,
  Info,
  InfoLinks,
  InfoName,
  InfoOccupation,
} from "./styles";
import PageContentRow from "components/Styles/PageContentRow";
import AboutMe from "components/AboutMe";
import PersonalDetail from "components/PersonalDetail";

const Home = () => (
  <div className="home">
    <HomeHeader>
      <Avatar />
      <Info>
        <InfoName>Sailor Moon</InfoName>
        <InfoOccupation>Guardian</InfoOccupation>
        <InfoLinks>
          <SocialMediaItem icon={twitter} />
          <SocialMediaItem icon={facebook} />
          <SocialMediaItem icon={instagram} />
        </InfoLinks>
      </Info>
    </HomeHeader>
    <PageContentRow>
        <AboutMe />
        <PersonalDetail />
    </PageContentRow>
  </div>
);

export default Home;
