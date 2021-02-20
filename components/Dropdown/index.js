import styles from "./styles.module.css";
import cn from "classnames";
import * as Icons from "../icons";

const Dropdown = ({ containerClassName, options, labelFor }) => {
  console.log(options);
  return (
    <div className={cn(styles.dropdownContainer, containerClassName)}>
      <label for={labelFor}>{labelFor}</label>
      <div className={styles.dropdownWrapper}>
        <select name={labelFor} id={labelFor}>
          {options.map((item, index) => {
            return (
              <option value={item.value} key={index}>
                {item.label}
              </option>
            );
          })}
        </select>
        <div className={styles.dropdownIcon}>
          <Icons.ArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
