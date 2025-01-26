import styles from "./Header.module.scss";

const ACTIONS = [
  {
    icon: "/cart-icon.svg",
    text: "0 руб.",
  },
  {
    icon: "/favorite-icon.svg",
    text: "Закладки",
  },
  {
    icon: "/profile-icon.svg",
    text: "Профиль",
  },
];

function Header() {
  return (
    <div className={styles.root}>
      <div className={`container ${styles.content}`}>
        <a href="/" className={styles.logoWrapper}>
          <img className={styles.logoIcon} src="/header-logo.svg" alt="" />
          <div className={styles.logoInfo}>
            <h1 className={styles.title}>Scoof Sneakers</h1>
            <h2 className={styles.subTitle}>Магазин лучших кроссовок</h2>
          </div>
        </a>
        <div className={styles.actions}>
          {ACTIONS.map((action, index) => (
            <button key={index} className={styles.actionsButton} type="button">
              <img className={styles.actionsIcon} src={action.icon} alt="" />
              <span>{action.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
