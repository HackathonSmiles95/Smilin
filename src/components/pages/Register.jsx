import React from "react";
import Input from "../common/input/input";
import Button from "../common/button/button";
import Label from "../common/label/label";
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
        type="text"
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
      <div>
        <div style={StyleRegister.containerButton}>
          <Button label="Cadastrar" style={StyleRegister.registerButton}/>
        </div>
        <div style={StyleRegister.containerCheck}>
          <Input style={props} id="check" type="checkbox" />
          <Label style={props} text="Li e concordo com os termos e regulamento" />
        </div>
      </div>
    </form>
  </section>
  </div>
  
);