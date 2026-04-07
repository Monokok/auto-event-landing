import { Route } from "react-router-dom";
// import styles from "./Hero.module.css";
import Header from "../../components/Header/Header";
import HeroDescription from "../../components/HeroDescription/HeroDescription";

function Hero() {
  return (
    <section>
      <Header></Header>
      <HeroDescription></HeroDescription>
    </section>
  );
}

export default Hero;
