import React from "react";

import StyleContents from "../../styles/contents.styles";
import StyleElements from "../../styles/elements.style";

import Title from "../common/title/title";
import Smilin from "../common/Smilin/smilin";

export default (props) => (
  <section style={StyleContents.container}>
    <div style={StyleContents.contentLeft}>
    <Title
        style={StyleElements.titleBlank}
        title="“Entre todos os livros do mundo, as melhores histórias estão entre as páginas de um passaporte.”"
      />

      <img
        style={StyleElements.imageLogin}
        src="assets/imageLogin.png"
        alt="Italian Trulli"
        width="50%"
        height="55%"
      />
    </div>
    <div style={StyleContents.contentRight3}>
    <img
        style={StyleElements.imageLogin}
        src="assets/help/card1.png"
        alt="Italian Trulli"
        width="80%"
      />
      <img
        style={StyleElements.imageLogin}
        src="assets/help/card2.png"
        alt="Italian Trulli"
        width="80%"
      />
      <img
        style={StyleElements.imageLogin}
        src="assets/help/card3.png"
        alt="Italian Trulli"
        width="80%"
      />
      <img
        style={StyleElements.imageLogin}
        src="assets/help/card4.png"
        alt="Italian Trulli"
        width="80%"
      />
      <img
        style={StyleElements.imageLogin}
        src="assets/help/card5.png"
        alt="Italian Trulli"
        width="80%"
      />
      <img
        style={StyleElements.imageLogin}
        src="assets/help/card6.png"
        alt="Italian Trulli"
        width="80%"
      />
      
    </div>
    <Smilin />
  </section>
);
