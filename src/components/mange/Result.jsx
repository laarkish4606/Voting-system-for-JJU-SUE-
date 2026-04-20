import React from 'react'
import print from "../../assets/print.png"
import styles from "./result.module.scss"
import { useSelector } from 'react-redux'
const Result = () => {
  const {competitors}=useSelector((state)=>state.competitor);
  console.log(competitors)
  return (
    <div className={styles.container}>
      <div className={styles.result}>
        <h1>Election Result</h1>
        <img src={print} alt="Print" />
      </div>
      <div className={styles.candidates}>
  {competitors.map((competitor) => (
    <div className={styles.card} key={competitor.id}>
      
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${competitor.image})` }}
      />
      <div className={styles.info}>
        <h3>{competitor.name}</h3>
        <p>{competitor.region}</p>
      </div>
      <div className={styles.status}>
        {competitor.votes > 70 ? (
          <span className={styles.winner}>winner.</span>
        ) : (
          <span className={styles.leading}>leading...</span>
        )}
      </div>

      
      <div className={styles.stats}>
        <h2>{competitor.votes}%</h2>
        <p>Votes: {competitor.votes}</p>
      </div>

    </div>
  ))}
</div>
    </div>
  )
}

export default Result