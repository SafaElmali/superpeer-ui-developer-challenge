import React from "react";
import styles from "./style.module.css";
import cn from "classnames";
import PropTypes from "prop-types";

const Button = ({ label, className, variant, ...props }) => {
  return (
    <button className={cn(styles.button, variant, className)} {...props}>
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * What will be displayed inside of the 
   */
  label: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * How large should the button be?
   */
};

Button.defaultProps = {
  variant: "primary",
  onClick: undefined,
};

export default Button;
