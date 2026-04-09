import Card from "../../components/Card/Card";
import styles from "./ProjectDescription.module.css";
import history from "../../assets/icons/history.svg";
import allCategory from "../../assets/icons/all-category.svg";
import notification from "../../assets/icons/notification.svg";
import share from "../../assets/icons/share.svg";
import image from "../../assets/icons/image.svg";
import edit from "../../assets/icons/edit.svg";

function ProjectDescription() {
  return (
    <div className={styles.ProjectDescription}>
      <p className={styles.HeaderTitle}>
        Автомобильные события - это не просто зрелище
      </p>
      <p>Почему стоит посетить автомероприятия?</p>

      <div className={styles.CardGrid}>
        <Card
          icon={history}
          headerText="Адреналин на максимум"
          descriptionText="Скорость и эмоции, которые встряхнут лучше кофе"
        ></Card>
        <Card
          icon={allCategory}
          headerText="Навыки на всю жизнь"
          descriptionText="Тест-драйвы и мастер-классы прокачают вождение"
        ></Card>
        <Card
          icon={share}
          headerText="Эксклюзивные знакомства "
          descriptionText="Автолюбители, тюнеры, профи в одном месте"
        ></Card>
        <Card
          icon={notification}
          headerText="Тренды и новинки"
          descriptionText="Первыми увидите суперкары и концепты 2026 года"
        ></Card>
        <Card
          icon={image}
          headerText="Тюнинг-идеи"
          descriptionText="Узнайте, как другие кастомизируют свои машины"
        ></Card>
        <Card
          icon={edit}
          headerText="Впечатления на память"
          descriptionText="Фото, Видео и истории для ВК и друзей."
        ></Card>
      </div>

      <button className={styles.Button}>Узнать о событиях</button>
    </div>
  );
}

export default ProjectDescription;
