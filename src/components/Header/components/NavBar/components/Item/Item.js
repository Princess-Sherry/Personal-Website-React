import React from "react";
import "./Item.css";

const Item = ({ onClick, path, active, children }) => (
  <a
    onClick={(event) => {
        onClick();
    }}
    className={`item ${active ? "item--active" : ""}`}
    href={path}
  >
    {children}
  </a>
);

export default Item;
