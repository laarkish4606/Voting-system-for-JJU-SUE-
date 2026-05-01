import React, { useEffect, useState } from 'react'
import print from "../../assets/print.png"
import styles from "./result.module.scss"
import { useSelector } from 'react-redux'
import axios from 'axios'
const Result = () => {

  
const [candidates, setCandidates] = useState([]);

useEffect(() => {
  const fetchCandidates = async () => {
    try {
      const { data } = await axios.get("/api/user/candidate");
      console.log(data);
      setCandidates(data);
    } catch (error) {
      console.log(error);
    }
  };


  fetchCandidates();
}, []);
 
  return (
    <div className={styles.container}>
      <div className={styles.result}>
        <h1>Election Result</h1>
        <img src={print} alt="Print" />
      </div>
      <div className={styles.candidates}>
  {candidates.map((candidate) => (
    <div className={styles.card} key={candidate.id}>
      
      <div
        className={styles.image}
        style={{ backgroundImage: `url(http://localhost:8000/${candidate.img})`}}
      />
      <div className={styles.info}>
        <h3>{candidate.name}</h3>
        <p>{candidate.region}</p>
      </div>
      <div className={styles.status}>
        {candidate.voteCount > 70 ? (
          <span className={styles.winner}>winner.</span>
        ) : (
          <span className={styles.leading}>leading...</span>
        )}
      </div>

      
      <div className={styles.stats}>
        <h2>{candidate.votes}%</h2>
        <p>Votes: {candidate.votes}</p>
      </div>

    </div>
  ))}
</div>
    </div>
  )
}

export default Result