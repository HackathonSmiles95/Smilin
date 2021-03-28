import React from "react";

export default (props) => (
  <button path={props.path} onClick={props.onClick} style={props.style} >{props.label}</button>
)
