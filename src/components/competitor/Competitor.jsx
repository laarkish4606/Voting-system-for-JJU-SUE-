import { MdOutlineHowToVote } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setCurrentCompetitor } from "../../features/competitor/competitorSlice";
import { handaleModal } from "../../features/modal/modalSlice";
import styles from "./competitor.module.scss";
const Competitor = ({competitor}) => {

  // clicking on vote icon function
  const dispatch=useDispatch();
  const vote=()=>{
    dispatch(setCurrentCompetitor(competitor))
    dispatch(handaleModal())
  
  }


  const backgroundStyle = {
  width: "100%",
  height: "300px",
  background: `linear-gradient(0deg, #128b4871, rgba(0,0,0,0) 60%, rgba(0,0,0,0)), url(${competitor.image})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

  return (
    <div className={styles.info} style={backgroundStyle}>
        <div className={styles.Competitor}>
            <span className={styles.name}>
                Name: {competitor.name}
            </span>
            <span className={styles.gpa}>GPA: {competitor.gpa}</span>
            <span className={styles.gpa}>Department: {competitor.department}</span>
            <span className={styles.vote}>Total votes: {competitor.votes}</span>

        </div>
        <div className={styles.Vote} onClick={vote}>
        <MdOutlineHowToVote className={styles.vote_icon} />
        </div>
    </div>
  )
}

export default Competitor