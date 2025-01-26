import styles from "./Button.module.scss";

function Button({ children, buttonSize = "small" }) {
  return (
    <button className={`${styles.root} ${styles[buttonSize]}`} type="button">
      {children}
    </button>
  );
}

export default Button;
