import styles from "./Header.module.css";
import { Routes, Route, Link } from "react-router-dom";
import logo from "../../assets/header-logo.svg";
import HeroDescription from "../HeroDescription/HeroDescription";
import ProjectDescription from "../../sections/project-description/ProjectDescription";
import Interaction from "../../sections/interaction/Interaction";

function Header() {
  return (
    <>
      <nav className={styles.HeaderNavigation}>
        <Link className={styles.Link} to={"/"}>
          <img className={styles.Logo} src={logo}></img>
          Автомобильные события
        </Link>
        <Link className={styles.Link} to={"/"}>
          Главная страница проекта
        </Link>
        <Link className={styles.Link} to={"about"}>
          О нас
        </Link>
        <Link className={styles.Link} to={"/"}>
          +7 (000) 000-00-00
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <>
          <HeroDescription></HeroDescription>
          <ProjectDescription></ProjectDescription>
          <Interaction></Interaction>
          </>
          }></Route>
        <Route path="/about" element={<>About</>}></Route>
      </Routes>
    </>
  );
}

export default Header;
