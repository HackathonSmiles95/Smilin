import "./card.css";
import React from "react";

export default (props) => {
  <div style={props.card}>
    <div style={props.cardContent}>
      {props.children}
    </div>
    <p style={props.cardText}>{props.label}</p>
  </div>
}