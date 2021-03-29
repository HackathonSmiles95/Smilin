import React from "react";

import StyleElements from "../../../styles/elements.style";
import StyleContents from "../../../styles/contents.styles";

import Button from "../button/button";

export default (props) => (
  <div style={StyleContents.containerCenter}>
    <span style={StyleElements.labelOrange}>Ou entre com:</span>
    <br />
    <div>
      <Button style={StyleElements.buttonBlank} label="gooble" />
      <Button style={StyleElements.buttonBlank} label="smiles" />
    </div>
  </div>
);
