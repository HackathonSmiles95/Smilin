import React from "react";

export default (props) => (
  <li style={props.styles}>
    <a href={props.path} style={props.stylesLink}>
      {props.label}
    </a>
  </li>
);
