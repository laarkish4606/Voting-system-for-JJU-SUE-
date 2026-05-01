import { useEffect, useState } from "react";
import axios from "axios";
import Competitor from "../competitor/Competitor";
import styles from "./competitors.module.scss";

const Competitors = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const { data } = await axios.get("/api/user/candidate");
        setCandidates(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCandidates();
  }, []);

  return (
    <div className={styles.competitor_container}>
      
      <div className={styles.competitor_header}>
        <span>JIGJIGA UNIVERSITY</span>
        <p>
          The Election Dashboard provides real-time overview of candidates and voting system.
        </p>
      </div>

      <div className={styles.competitors}>
        {candidates.length > 0 ? (
          candidates.map((candidate) => (
            <Competitor
              key={candidate._id}
              candidate={candidate}
            />
          ))
        ) : (
          <p className={styles.message}>No candidates found !</p>
        )}
      </div>

    </div>
  );
};

export default Competitors;
