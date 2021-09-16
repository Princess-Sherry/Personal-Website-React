import React from "react";
import LinkItem from "./components/LinkItem/LinkItem";
import "./Info.css";
import twitter from '/src/assets/icons/twitter';
import facebook from '/src/assets/icons/facebook';
import instagram from '/src/assets/icons/instagram';

const Info = () => (
  <div class="info">
    <h2 class="info__name">Sailor Moon</h2>
    <div class="info__occupation">Guardian</div>
    <div class="info__links">
        <LinkItem image={twitter} />
        <LinkItem image={facebook} />
        <LinkItem image={instagram} />
    </div>
  </div>
);

export default Info;
