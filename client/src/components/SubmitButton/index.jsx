import React from "react";
import { Button } from "../common/helpers";
import PropTypes from "prop-types";

const SubmitButton = ({ children, loading }) => (
  <Button
    type="submit"
    color="green"
    fluid
    loading={loading}
    disabled={loading}
  >
    {children}
  </Button>
);

SubmitButton.propTypes = {
  children: PropTypes.element,
  loading: PropTypes.bool,
};

export default SubmitButton;
