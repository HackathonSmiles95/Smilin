import React from "react";

import StyleElements from "../../styles/elements.style";

import Button from "../common/button/button";
import Title from "../common/title/title";
import Card from "../common/cards/card";

export default (props) => (
  <section style={props}>
    <div style={props}>
      <Title title="Aprenda tudo sobre MILHAS, acumule ........" />
      <Button style={StyleElements.button} label="Aprenda Agora" />
      <Button style={StyleElements.button} label="Acessar" />
    </div>
    <div style={props}>
      <Card> Card </Card>
    </div>
  </section>
);
