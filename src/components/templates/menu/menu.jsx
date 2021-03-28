import "./menu.css";
import React from "react";
import MenuItem from "./menuItem";
import StyleMain from "../../../styles/main.style";

export default (props) => (
  <ul style>
    <MenuItem
      path="#about"
      label="Quem Somos?"
      style={StyleMain.bigblue}
    />
    <MenuItem path="#help" label="Ajuda" />
    <MenuItem path="#partner" label="Parceiros" />
    <MenuItem path="#register" label="Cadastre-se" />
    <MenuItem path="#login" label="login" />
  </ul>
);
