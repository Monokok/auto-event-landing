import styles from "./HeroDescription.module.css";
import heroPicture from "../../assets/hero-picture.svg";

function HeroDescription() {
  return (
    <div className={styles.HeroRow}>
      <div className={styles.HeroColumn}>
        <p className={styles.TextHeader}>
          Автомобильные события - это источник впечатлений, которые остаются с
          тобой на всю жизнь
        </p>
        <p className={styles.Text}>Всегда актуальные, ближайшие, лучшие</p>
        {/* <button className={styles.Button}>Узнать о событиях</button> */}
        <a href="https://monokok.github.io/auto-events/" className={styles.Button}>
        Узнать о событиях
      </a>
      </div>
      <div className={styles.HeroColumn}>
        <img
          className={styles.HeroPicture}
          src={heroPicture}
          alt="Hero illustration"
        ></img>
      </div>
    </div>
  );
}

export default HeroDescription;
