import { MdOutlineHowToVote } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setCurrentCompetitor } from "../../features/competitor/competitorSlice";
import { handaleModal } from "../../features/modal/modalSlice";
import styles from "./competitor.module.scss";

const Competitor = ({ candidate }) => {
  const dispatch = useDispatch();

  if (!candidate) return null;

  const vote = () => {
    dispatch(setCurrentCompetitor(candidate));
    dispatch(handaleModal());
  };

  const imageUrl = candidate.img
    ? `http://localhost:8000/${candidate.img}`
    : "";

  const backgroundStyle = {
    width: "100%",
    height: "300px",
    background: imageUrl
      ? `linear-gradient(0deg, #128b4871, rgba(0,0,0,0) 60%, rgba(0,0,0,0)), url(${imageUrl})`
      : "#ccc",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className={styles.info} style={backgroundStyle}>
      <div className={styles.Competitor}>
        <span>Name: {candidate.name}</span>
        <span>GPA: {candidate.gpa}</span>
        <span>Department: {candidate.department}</span>
        <span>Total votes: {candidate.voteCount}</span>
      </div>

      <div className={styles.Vote} onClick={vote}>
        <MdOutlineHowToVote className={styles.vote_icon} />
      </div>
    </div>
  );
};

export default Competitor;
