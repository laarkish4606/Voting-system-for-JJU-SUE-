
import styles from "./home.module.scss";
import heroImg from "../../../assets/jju.jpg"
import vot from "../../../assets/images.png"
import mobile from "../../../assets/mob.png"
import net from "../../../assets/networ.png"
const HomeHero = () => {
  return (
    <div className={styles.container}>

      <div className={styles.hero}>
        
        <div className={styles.left}>
          <h1>JJU Online Voting System</h1>

          <p>
            secure, transparency and easy Online Voting <br />
            for Jigjiga university student union election
          </p>

          <a href="/signup" className={styles.button}>
            Get started
          </a>
        </div>

        <div className={styles.right}>
          <img src={heroImg} alt="JJU" />
        </div>
      </div>

  
      <div className={styles.features}>

        <div className={styles.card}>
          <div className={styles.icon}>
            <img src={vot} alt="Secure Voting" />
          </div>
          <h3>Secure Voting</h3>
          <p>
            Each student can vote only once using their university credentials.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            <img src={net} alt="Transparent Results" />
          </div>
          <h3>Transparent Results</h3>
          <p>
            Votes are counted automatically and displayed in real time.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            <img src={mobile} alt="Easy to Use" />
          </div>
          <h3>Easy to Use</h3>
          <p>
            Vote using your phone, tablet, or computer.
          </p>
        </div>

      </div>

    </div>
  );
};

export default HomeHero;
