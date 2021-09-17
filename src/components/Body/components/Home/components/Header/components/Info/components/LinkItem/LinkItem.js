import React from "react";
import "./LinkItem.css";
import styled from "styled-components";

const LinkItem = styled.a`
  background-image: url(${props => props.icon});
  background-color: whitesmoke;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin: 5px;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
`;

export default LinkItem;
