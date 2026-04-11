import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/header-logo.svg";

function Header() {
  return (
    <nav className={styles.HeaderNavigation}>
      <Link className={styles.Link} to={"/"}>
        <img className={styles.Logo} src={logo} />
        Автомобильные события
      </Link>

      {/* Важно!: внешняя ссылка - не через Link */}
      <a
        className={styles.Link}
        href="https://monokok.github.io/auto-events/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Главная страница проекта
      </a>

      <Link className={styles.Link} to={"/about"}>
        О нас
      </Link>

      <a className={styles.Link} href="tel:+70000000000">
        +7 (000) 000-00-00
      </a>
    </nav>
  );
}

export default Header;