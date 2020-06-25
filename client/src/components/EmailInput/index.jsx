import React from "react";
import Input from "../FormInput";

const EmailInput = () => (
  <Input
    required
    id="email"
    icon="mail"
    placeholder="Enter e-mail address"
    type="email"
    label="e-mail"
  />
);

export default EmailInput;
