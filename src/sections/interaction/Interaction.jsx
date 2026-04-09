import styles from "./Interaction.module.css";
import StepCard from "../../components/StepCard/StepCard";
function Interaction() {
  return (
    <div className={styles.Interaction}>
      <p className={styles.Header}>Этапы работы</p>
      <p className={styles.Title}>Подробная схема нашей работы с клиентами</p>
      <div className={styles.StepsContainer}>
        <StepCard
          step={1}
          header={"Выберите город"}
          title={"Начало. Выбранный город - первый шаг к новым ощущениям"}
        ></StepCard>
        <StepCard
          step={2}
          header={"Укажите типы событий"}
          title={"Какие события особенно вам интересны?"}
        ></StepCard>
        <StepCard
          step={3}
          header={"Поиск и выбор"}
          title={
            "Конечный результат - конкретное событие, которое точно не останется без вашего участия"
          }
        ></StepCard>
      </div>
      <a
        href="https://monokok.github.io/auto-events/"
        className={styles.Button}
      >
        Узнать о событиях
      </a>
    </div>
  );
}

export default Interaction;
