import styles from "./styles.module.css";
import cn from "classnames";

const Input = ({ icon, containerStyle, ...props }) => {
  return (
    <div className={cn(styles.wrapper)} style={containerStyle}>
      {icon}
      <input {...props} />
    </div>
  );
};

export default Input;
