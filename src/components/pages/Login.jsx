import React from "react";
import Input from "../templates/input/input";
import Button from "../templates/button/button";
import Label from "../templates/label/label";

export default (props) => (
  <section style={props.s}>
    <div style={props}>
      <h1> Acesse sua conta: </h1>
    </div>
    <div>
      <Input style={props} type="email" name="email" placeholder="email" />
      <Input style={props} type="password" name="email" placeholder="email" />
      <Label style={props} text="Esqueceu a senha? "/>

      <Button label="Entrar" />
      <div>
        <Button label="gooble" />
        <Button label="smiles" />
        <Label style={props} text="Ainda não tem cadastro?" />
      </div>
    </div>
  </section>
);
