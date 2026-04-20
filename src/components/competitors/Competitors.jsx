import { useSelector } from "react-redux";
import Competitor from "../competitor/Competitor";
import styles from "./competitors.module.scss";

const Competitors = () => {
 const {competitors}=useSelector((store)=>store.competitor)

  return (
    <div className={styles.competitor_container}>
        <div className={styles.competitor_header}>
            <span>JIGJIGA UNIVERSITY </span>
            <p>The Election Dashboard provides a real-time overview of the election process, allowing administrators to monitor candidate performance and voter participation. It ensures transparency through clear and accurate statistics, enforces eligibility rules by requiring a minimum GPA of 3.5 for President candidates and 3.3 for Vice President candidates, and prevents multiple voting by ensuring that each student can cast only one vote.
                </p>

        </div>
        <div className={styles.competitors}>
            {
                competitors.map((competitor)=>(
                <div key={competitor.id}>
                    <Competitor  competitor={competitor}/>
                    </div>
                ))
                
            }
            
        </div>
    </div>
  )
}

export default Competitors