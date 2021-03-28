import React from "react";

export default (props) => {
  const size = props.size;
  const color = props.color;

  return <section className={`cssBase ${color || "orange" }`}>{props.children}</section>;
};
