import styles from "./Footer.module.css";
// import logo from "../../assets/header-logo.svg";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className={styles.Footer}>
      <nav className={styles.Nav}>
        <Link className={styles.Link} to={"/"}>
          {/* <img className={styles.Logo} src={logo}></img> */}
          Автомобильные события
        </Link>
        <Link className={styles.Link} to={"https://monokok.github.io/auto-events/"}>
          Главная страница проекта
        </Link>
        {/* <Link className={styles.Link} to={"about"}>
          О нас
        </Link> */}
        <Link className={styles.Link} to={"/"}>
          +7 (000) 000-00-00
        </Link>
      </nav>
    </div>
  );
}

export default Footer;
