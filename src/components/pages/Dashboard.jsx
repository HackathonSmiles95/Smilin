/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Card from "../common/cards/card";

export default (props) => (
  <section style={props}>
    <div style={props}>
      <img />
      <strong>Fulano de tal</strong>
      <a> Sair </a>

      <ul>
        <li>Minhas Milhas</li>
        <li>Alterar meus dados</li>
        <li>Meus gostos</li>
        <li>Denuncia</li>
        <li>Suporte</li>
      </ul>
    </div>

    <div style={props} >
      <h1>Última Viagem</h1>
      <Card> </Card>
      <h1>Minhas ofertas</h1>
      <Card> </Card>
    </div>
  </section>
);
