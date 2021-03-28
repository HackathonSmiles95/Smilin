import React from "react";

export default (props) => (
  <button path={props.path} onClick={props.onClick()} className="">{props.label}</button>
)
