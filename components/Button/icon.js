import React from "react";
import cn from "classnames";
import Button from "./index";
import styles from "./style.module.css";

function IconButton({ children, className, ...props }) {
  return (
    <Button className={cn(styles.iconButton, className)} {...props}>
      {children}
    </Button>
  );
}

export default IconButton;
