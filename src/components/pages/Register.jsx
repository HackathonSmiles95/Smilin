import React from "react";
import Input from "../templates/input/input";
import Button from "../templates/button/button";
import Label from "../templates/label/label";
import StyleRegister from "../../styles/Register.style";

export default (props) => (
  <div style={StyleRegister.container}>    
  <section style={StyleRegister.information}>
    <div style={StyleRegister.containerInfor}>
      <img src="assets/InforTelaCadastro.png" alt="Italian Trulli" width="800" height="800"/> 
    </div>    
  </section>
  <section style={StyleRegister.formRegistre}>
    <div style={props}>
      <h1 style={StyleRegister.formTitle}> Quero aprender e ficar atualizado(a). </h1>
    </div>
    <form style={StyleRegister.form}>
      <Input
        style={StyleRegister.inputCadastro100}
        id="name"
        name="name"
        type="text"
        placeholder="Nome completo"
      />
      <Input
        style={StyleRegister.inputCadastro40}
        id="cpf"
        name="cpf"
        type="text"
        placeholder="CPF"
      />
      <Input
        style={StyleRegister.inputCadastro55}
        id="fone"
        name="fone"
        type="text"
        placeholder="Telefone"
      />
      <Input
        style={StyleRegister.inputCadastro40}
        id="state"
        name="state"
        type="text"
        placeholder="Estado"
      />
      <Input
        style={StyleRegister.inputCadastro55}
        id="cep"
        name="cep"
        type="number"
        placeholder="CEP"
      />
      <Input
        style={StyleRegister.inputCadastro45}
        id="city"
        name="city"
        type="text"
        placeholder="Cidade"
      />
      <Input
        style={StyleRegister.inputCadastro50}
        id="district"
        name="district"
        type="text"
        placeholder="BAIRRO"
      />
      <Input
        style={StyleRegister.inputCadastro100}
        id="address"
        name="address"
        type="text"
        placeholder="Endereço"
      />
      <Input
        style={StyleRegister.inputCadastro100}
        id="email"
        name="email"
        type="email"
        placeholder="Email"
      />
      <Input
        style={StyleRegister.inputCadastro45}
        id="password"
        name="password"
        type="password"
        placeholder="Senha"
      />
      <Input
        style={StyleRegister.inputCadastro45s}
        id="passwordConfirm"
        name="passwordConfirm"
        type="password"
        placeholder="Confirmação a senha"
      />
      <Input style={props} id="check" type="checkbox" />
      <Label style={props} text="Li e concordo com os termos e regulamento" />

      <Button label="enviar" />
      <div>
        <span> Ou entre com: </span>
        <Button label="google" />
        <Button label="smiles" />
      </div>
    </form>
  </section>
  </div>
  
);
