import styles from "./Button.module.scss";

function Button({ children, buttonSize = "small", onClick }) {
  return (
    <button
      className={`${styles.root} ${styles[buttonSize]}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
