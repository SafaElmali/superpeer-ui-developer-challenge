import styles from "./styles.module.css";
import cn from "classnames";
import * as Icons from "../icons";

const Modal = ({ renderComp, containerClassName, labelFor }) => {
  return (
    <div className={cn(styles.modalRowContainer, containerClassName)}>
      <label className={styles.label} for={labelFor}>
        {labelFor}
      </label>
      <div className={styles.renderCompWrapper}>{renderComp}</div>
    </div>
  );
};

export default Modal;
