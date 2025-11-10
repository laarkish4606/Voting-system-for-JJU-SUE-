import styles from "./competitors.module.scss"
import Competitor from "../competitor/competitor"
import competitors from "../../assets/competitors.json"
import { useSelector } from "react-redux"

const Competitors = () => {
 const {competitors}=useSelector((store)=>store.competitor)

  return (
    <div className={styles.competitor_container}>
        <div className={styles.competitor_header}>
            <span>mss Ethiopia</span>
            <p>The MSS Ethiopia Voting System allows citizens to vote for their favorite candidates in a simple and secure way. 
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