import "./menu.css";
import React from "react";
import MenuTree from "./menuTree";
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
        <MenuItem path="#help" label="Ajuda" icon="" styles={StyleMain.menuLi}  stylesLink={StyleMain.menuLink}/>
        <MenuItem path="#partner" label="Parceiros" icon="" styles={StyleMain.menuLi}  stylesLink={StyleMain.menuLink}  />
        <MenuItem path="#register" label="Cadastre-se" icon=""  styles={StyleMain.menuLi}  stylesLink={StyleMain.menuLink}/>
        <li style={StyleMain.menuLi}>
          <a href="#" style={StyleMain.menuAcesso} >
            {/* <i className={props.icon}></i> {props.label} */}
            Acesse
          </a>
        </li>
      </div>

    </ul>
  </nav>
);
