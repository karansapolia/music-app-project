import React from "react";
import FormInput from "../FormInput";
import PropTypes from "prop-types";

const TextInput = ({ name, iconName, ...props }) => (
  <FormInput
    required
    icon={iconName}
    placeholder={name}
    type="text"
    label={name}
    id={name}
    {...props}
  />
);

TextInput.propTypes = {
  name: PropTypes.string,
  iconName: PropTypes.string,
};

export default TextInput;
