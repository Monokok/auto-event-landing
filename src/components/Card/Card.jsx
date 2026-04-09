import styles from "./Card.module.css";

function Card({icon, headerText, descriptionText}) {
  return (
    <div className={styles.Card}>
      <img className={styles.Image} src={icon} alt="card-description-picture" />
      <div className={styles.TextContainer}>
        <p className={styles.Header}>{headerText}</p>
        <p className={styles.Description}>{descriptionText}</p>
      </div>
    </div>
  );
}

export default Card;
