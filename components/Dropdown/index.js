import styles from "./styles.module.css";
import cn from "classnames";
import * as Icons from "../icons";

const Dropdown = ({ containerClassName, options=[], labelFor }) => {
  return (
    <div className={cn(styles.dropdownContainer, containerClassName)}>
      <label className={styles.label} for={labelFor}>
        {labelFor}
      </label>
      <div className={styles.dropdownWrapper}>
        <select className={styles.select} name={labelFor} id={labelFor}>
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
