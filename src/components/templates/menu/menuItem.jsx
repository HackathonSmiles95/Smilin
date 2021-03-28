import React from "react";

export default (props) => (
  <li>
    <a href={props.path} style={props.styles}>{props.label}</a>
  </li>
)