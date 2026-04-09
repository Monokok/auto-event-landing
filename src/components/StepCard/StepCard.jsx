import styles from './StepCard.module.css'

function StepCard({step, header, title}){
    return(
    <div className={styles.StepCard}>
        <p className={styles.Step}>{step}</p>
        <p className={styles.Header}>{header}</p>
        <p className={styles.Title}>{title}</p>
    </div>
    )
}

export default StepCard