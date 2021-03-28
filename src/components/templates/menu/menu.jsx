import "./menu.css";
import React from "react";
import MenuTree from "./menuTree";
import MenuItem from "./menuItem";
import StyleMain from "../../../styles/main.style";

export default (props) => (
  <ul className="">
    <MenuItem
      path="#about"
      label="Quem Somos?"
      icon=""
      style={StyleMain.bigblue}
    />
    <MenuItem path="#help" label="Ajuda" icon="" />
    <MenuItem path="#partner" label="Parceiros" icon="" />
    <MenuItem path="#register" label="Cadastre-se" icon="" />
  </ul>
);
