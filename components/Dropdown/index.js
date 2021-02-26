import styles from "./styles.module.css";
import * as Icons from "../icons";

const Dropdown = ({ options = [], labelFor }) => {
  return (
    <>
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
    </>
  );
};

export default Dropdown;
