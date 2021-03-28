import "../../../main/app.css";

import React from "react";

export default (props) => {
  const size = props.size;
  const color = props.color;
  const image = props.image

  return <section className={`content color`}>{props.children}</section>;
};
