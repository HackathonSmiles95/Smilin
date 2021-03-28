/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import MenuItem from "./menuItem";
import StyleMain from "../../../styles/main.style";

export default (props) => (
  <nav id="menu">
    <ul style={StyleMain.menuUl}>
      <div style={StyleMain.menuContainer} >
        <MenuItem
          path="#about"
          label="Quem Somos?"
          icon=""
          styles={StyleMain.menuLi}
          stylesLink={StyleMain.menuLink}
        />
        <MenuItem path="#help" label="Ajuda" styles={StyleMain.menuLi}  stylesLink={StyleMain.menuLink}/>
        <MenuItem path="#partner" label="Parceiros"  styles={StyleMain.menuLi}  stylesLink={StyleMain.menuLink}  />
        <MenuItem path="#register" label="Cadastre-se"  styles={StyleMain.menuLi}  stylesLink={StyleMain.menuLink}/>
        <MenuItem path="#login" label="Acesso" styles={StyleMain.menuLi} stylesLink={StyleMain.menuAcesso}/>
      </div>

    </ul>
  </nav>
);
