import React from "react";

import StyleElements from "../../styles/elements.style";
import StyleRegister from "../../styles/Register.style";

import Input from "../common/input/input";
import Button from "../common/button/button";
import Label from "../common/label/label";

export default (props) => (
  <div style={StyleRegister.container}>
    <section style={StyleRegister.information}>
      <div style={StyleRegister.containerInfor}>
        <img
          src="assets/InforTelaCadastro.png"
          alt="Italian Trulli"
          width="800"
          height="800"
        />
      </div>
    </section>
    <section style={StyleRegister.formRegistre}>
      <div style={props}>
        <h1 style={StyleRegister.formTitle}>
          {" "}
          Quero aprender e ficar atualizado(a).{" "}
        </h1>
      </div>
      <form style={StyleRegister.form}>
        <Input
          style={StyleElements.input100}
          id="name"
          name="name"
          type="text"
          placeholder="Nome completo"
        />
        <Input
          style={StyleElements.input40}
          id="cpf"
          name="cpf"
          type="text"
          placeholder="CPF"
        />
        <Input
          style={StyleElements.input55}
          id="fone"
          name="fone"
          type="text"
          placeholder="Telefone"
        />
        <Input
          style={StyleElements.input40}
          id="state"
          name="state"
          type="text"
          placeholder="Estado"
        />
        <Input
          style={StyleElements.input55}
          id="cep"
          name="cep"
          type="text"
          placeholder="CEP"
        />
        <Input
          style={StyleElements.input45}
          id="city"
          name="city"
          type="text"
          placeholder="Cidade"
        />
        <Input
          style={StyleElements.input50}
          id="district"
          name="district"
          type="text"
          placeholder="BAIRRO"
        />
        <Input
          style={StyleElements.input100}
          id="address"
          name="address"
          type="text"
          placeholder="Endereço"
        />
        <Input
          style={StyleElements.input100}
          id="email"
          name="email"
          type="email"
          placeholder="Email"
        />
        <Input
          style={StyleElements.input45}
          id="password"
          name="password"
          type="password"
          placeholder="Senha"
        />
        <Input
          style={StyleElements.input45s}
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          placeholder="Confirmação a senha"
        />
        <div>
          <div style={StyleElements.containerButton}>
            <Button label="Cadastrar" style={StyleElements.button} />
          </div>
          <div style={StyleElements.containerCheck}>
            <Input style={props} id="check" type="checkbox" />
            <Label
              style={props}
              text="Li e concordo com os termos e regulamento"
            />
          </div>
        </div>
      </form>
    </section>
  </div>
);
