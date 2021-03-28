import React from "react";
import Button from "../common/button/button";
import Title from "../common/title/title";
import Card from "../common/cards/card";

export default (props) => (
  <section style={props}>
    <div style={props}>
      <Title title="Aprenda tudo sobre MILHAS, acumule ........" />
      <Button label="Aprenda Agora" />
      <Button label="Acessar" />
    </div>
    <div style={props}>
      <Card> Card </Card>
    </div>
  </section>
);
