import "../../../main/app.css";
import StyleMain from "../../../styles/main.style";

import React from "react";

export default (props) => {
  const size = props.size;
  const color = props.color;
  const image = props.image;

  return <section style={StyleMain.content}>{props.children}</section>;
};
