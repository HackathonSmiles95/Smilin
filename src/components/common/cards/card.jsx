import React from "react";

export default (props) => (
  <section style={props.card}>
    <div style={props.cardContent}>
      {props.children}
    </div>
    <p style={props.cardText}>{props.label}</p>
  </section>
)