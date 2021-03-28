import React from 'react'
import Input from "../templates/input/input";
import Button from "../templates/button/button";
import Label from "../templates/label/label";

export default props => (
  <section style={props.s} >
    <Input type="email" name="email" placeholder="email" />
  </section>
)