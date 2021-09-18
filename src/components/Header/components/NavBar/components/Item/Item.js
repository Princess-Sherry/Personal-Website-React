import React from "react";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import "./Item.css";

function Item({ to, active, children }) {
  let match = useRouteMatch({
    path: to,
    exact: active,
  });

  return (
    <Link className={match ? "item item--active" : "item"} to={to}>
      {children}
    </Link>
  );
}

export default Item;
