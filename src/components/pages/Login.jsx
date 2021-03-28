import React from "react";

import StyleElements from "../../styles/elements.style";
import StyleContents from "../../styles/contents.styles";

import Input from "../common/input/input";
import Button from "../common/button/button";
import Label from "../common/label/label";
import Accounts from "../common/loginAccounts/Accounts";

export default (props) => (
  <section style={StyleContents.container}>
    <div style={StyleContents.contentLeft}>
      <img
        src="assets/InforTelaCadastro.png"
        alt="Italian Trulli"
        width="800"
        height="800"
      />
    </div>
    <div style={StyleContents.contentRight}>
      <h1> Acesse sua conta: </h1>
      <div>
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
        <Label style={props} text="Esqueceu a senha? " />

        <Button style={StyleElements.button} label="Entrar" />

        <Accounts />
        <Label style={props} text="Ainda não tem cadastro?" />
      </div>
    </div>
  </section>
);
