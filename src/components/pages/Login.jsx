import React from "react";

import StyleElements from "../../styles/elements.style";
import StyleContents from "../../styles/contents.styles";

import Input from "../common/input/input";
import Button from "../common/button/button";
import Label from "../common/label/label";
import Accounts from "../common/loginAccounts/Accounts";
import Smilin from "../common/Smilin/smilin";
import Title from "../common/title/title";

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
    <div style={StyleContents.contentRight}>
      <div style={StyleContents.containerTop}>
        <Label style={StyleElements.titleOrange} text="Acesse sua conta:" />
        <Input
          style={StyleElements.input40}
          type="email"
          name="email"
          placeholder="email"
        />
        <Input
          style={StyleElements.input40}
          type="password"
          name="email"
          placeholder="email"
        />
        <Label style={StyleElements.span2} text="Esqueceu a senha? " />

        <Button style={StyleElements.button} label="Entrar" />

        <Accounts />
        <Label style={StyleElements.span} text="Ainda não tem cadastro?" />

      </div>
      <img
      style={StyleElements.image1}
        src="assets/airplane-route.png"
        alt="Italian Trulli"
        width="80%"
        height="30%"
      />
    </div>
    
    <Smilin />
  </section>
);
