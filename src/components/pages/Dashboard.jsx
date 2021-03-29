/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import StyleElements from "../../styles/elements.style";
import StyleContents from "../../styles/contents.styles";

import Card from "../common/cards/card";
import Label from "../common/label/label";
import Smilin from "../common/Smilin/smilin";

export default (props) => (
  <section style={StyleContents.container}>
    <div style={StyleContents.contentLeft2}>
      <div style={StyleContents.perfil}>
        <img
          style={StyleElements.image2}
          src="assets/dash/Manu.png"
          width="40%"
        />
        <div style={StyleContents.perfil2}>
          <strong>Manuelyta</strong>
          <a> Sair </a>
        </div>
      </div>

      <ul style={StyleElements.ul}>
        <li style={StyleElements.li}>Minhas Milhas</li>
        <li style={StyleElements.li}>Alterar meus dados</li>
        <li style={StyleElements.li}>Indicações</li>
        <li style={StyleElements.li}>Extrato</li>
        <li style={StyleElements.li}>Cartão de Crédito</li>
        <li style={StyleElements.li}>Denúncia</li>
        <li style={StyleElements.li}>Suporte</li>
      </ul>
    </div>

    <div style={StyleContents.contentRight2}>
      <div style={StyleContents.separator}>
        <img src="assets/dash/trofel.png" width="20%" />
        <img src="assets/dash/Group_66.png" width="50%" />
      </div>

      <h1>Última Viagem</h1>
      <img src="assets/dash/Vector.png" width="90%" />

      <h1>Minhas ofertas</h1>
      <img src="assets/dash/Vector2.png" width="60%" />

      <div style={StyleContents.left}>
        <Label style={StyleElements.span3} text="Indique e ganhe" />
        <img src="assets/dash/indique.png" width="10%" />
      </div>
    </div>
    <Smilin />
  </section>
);
