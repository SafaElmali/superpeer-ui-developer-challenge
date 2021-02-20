import { useState } from "react";
import styles from "./styles.module.css";
import cn from "classnames";

const Input = ({ icon, containerStyle, value = "", ...props }) => {
  const [inputValue, setInputValue] = useState(value);
  return (
    <div className={cn(styles.wrapper)} style={containerStyle}>
      {icon}
      <input
        value={inputValue}
        onChange={({ target }) => setInputValue(target.value)}
        {...props}
      />
    </div>
  );
};

export default Input;
