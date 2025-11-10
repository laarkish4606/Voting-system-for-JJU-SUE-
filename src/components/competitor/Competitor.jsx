import { setCurrentCompetitor, setInCreament } from "../../features/competitor/competitorSlice";
import { handaleModal } from "../../features/modal/modalSlice";
import competitors from "../competitors/Competitors"
import styles from "./competitor.module.scss"
import { MdOutlineHowToVote } from "react-icons/md";
import { useDispatch } from "react-redux";
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
                {competitor.name}
            </span>
            <span className={styles.region}>{competitor.region}</span>
            <span className={styles.vote}>Total votes: {competitor.votes}</span>

        </div>
        <div className={styles.Vote} onClick={vote}>
        <MdOutlineHowToVote className={styles.vote_icon} />
        </div>
    </div>
  )
}

export default Competitor