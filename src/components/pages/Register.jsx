import React from "react";
import Input from "../common/input/input";
import Button from "../common/button/button";
import Label from "../common/label/label";

export default (props) => (
  <section style={props}>
    <div style={props}>
      <h1 style={props}> Quero aprender e ficar atualizado(a). </h1>
    </div>
    <form style={props}>
      <Input
        style={props}
        id="name"
        name="name"
        type="text"
        placeholder="Nome completo"
      />
      <Input
        style={props}
        id="cpf"
        name="cpf"
        type="number"
        placeholder="CPF"
      />
      <Input
        style={props}
        id="fone"
        name="fone"
        type="number"
        placeholder="Telefone"
      />
      <Input
        style={props}
        id="state"
        name="state"
        type="text"
        placeholder="Estado"
      />
      <Input
        style={props}
        id="cep"
        name="cep"
        type="number"
        placeholder="CEP"
      />
      <Input
        style={props}
        id="city"
        name="city"
        type="text"
        placeholder="Cidade"
      />
      <Input
        style={props}
        id="district"
        name="district"
        type="text"
        placeholder="BAIRRO"
      />
      <Input
        style={props}
        id="address"
        name="address"
        type="text"
        placeholder="Endereço"
      />
      <Input
        style={props}
        id="email"
        name="email"
        type="email"
        placeholder="Email"
      />
      <Input
        style={props}
        id="password"
        name="password"
        type="password"
        placeholder="Senha"
      />
      <Input
        style={props}
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
);
