import React from "react";
import Button from "../button/button";
import Label from "../label/label";

export default (props) => (
  <div>
    <span style={props}>Ou entre com:</span>
    <Button label="gooble" />
    <Button label="smiles" />
  </div>
);
