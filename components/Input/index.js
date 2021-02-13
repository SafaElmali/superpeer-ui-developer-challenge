import styles from "./styles.module.css";
import cn from "classnames";

const Input = ({ icon, ...props }) => {
  return (
    <div className={cn(styles.wrapper)}>
      {icon}
      <input {...props} />
    </div>
  );
};

export default Input;
