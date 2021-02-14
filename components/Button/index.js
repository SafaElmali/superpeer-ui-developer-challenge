import React from "react";
import styles from "./style.module.css";
import cn from "classnames";
import PropTypes from "prop-types";

const Button = ({ children, className, variant, ...props }) => {
  return (
    <button className={cn(styles.button, variant, className)} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   * What will be displayed inside of the
   */
  children: PropTypes.node,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: "primary",
  onClick: undefined,
};

export default Button;
