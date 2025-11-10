import styles from "./timer.module.scss"

const Times = ({days,hours,minutes,seconds}) => {
  return (
    <div>
  <h1>Voting end on</h1>
        <div className={styles.times}>
         <div className={styles.counter_digits}>
            <span className={styles.digit}>{days}:</span>
            <span className={styles.text}>days</span>
            </div>
         <div className={styles.counter_digits}>
            <span className={styles.digit}>{hours}:</span>
            <span className={styles.text}>Hours</span>
            </div>
         <div className={styles.counter_digits}>
            <span className={styles.digit}>{minutes}:</span>
            <span className={styles.text}>minutes</span>
            </div>
         <div className={styles.counter_digits}>
            <span className={styles.digit}>{seconds}</span>
            <span className={styles.text}>seconds</span>
            </div>
        </div>
    </div>
  )
}

export default Times