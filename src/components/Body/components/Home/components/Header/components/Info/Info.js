import React from "react";
import LinkItem from "./components/LinkItem/LinkItem";
import "./Info.css";
import twitter from "/src/assets/icons/twitter";

const Info = () => (
  <div class="info">
    <h2 class="info__name">Sailor Moon</h2>
    <div class="info__occupation">Guardian</div>
    <div class="info__links">
        <LinkItem icon={twitter} />
        <LinkItem icon="/src/assets/icons/facebook.svg" />
        <LinkItem icon="/src/assets/icons/instagram.svg" />
    </div>
  </div>
);

export default Info;
