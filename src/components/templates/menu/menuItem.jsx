import React from "react";

export default (props) => (
  <li style={props.styles}>
    <a href={props.path} style={props.styles} >
      <i className={props.icon}></i> {props.label}
    </a>
  </li>
)