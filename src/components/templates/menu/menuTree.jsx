/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props => {
  <li className="">
    <a href="/">
      <i className={`${props.icon}`}></i> {props.label}
    </a>
    <ul className="">
      {props.children}
    </ul>
  </li>
}