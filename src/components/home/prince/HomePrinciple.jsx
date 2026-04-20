import styles from "./homePrince.module.scss";
import key from "../../../assets/key.png";
import computer from "../../../assets/ui.jpg";
import vote from "../../../assets/vot.png";
import result from "../../../assets/result.jpg";
import { useState } from "react";
import data from "../../../assets/FAQ.json"
import { AiOutlineArrowRight,AiOutlineArrowDown } from "react-icons/ai";
import { FaLongArrowAltRight } from "react-icons/fa";
const HomePrinciple = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>

     
      <h2 className={styles.title}>How it Works</h2>

     
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.icon}>
            <img src={key} alt="Login" />
          </div>
          <p>Login with JJU credential</p>
        </div>

        <div className={styles.arrow}>
          <FaLongArrowAltRight />
        </div>

        <div className={styles.step}>
          <span className={styles.icon}>
            <img src={computer} alt="View Candidates" />
          </span>
          <p>View the candidate</p>
        </div>

        <div className={styles.arrow}>
          <FaLongArrowAltRight />
        </div>

        <div className={styles.step}>
          <span className={styles.icon}>
            <img src={vote} alt="Cast Vote" />
          </span>
          <p>Cast your vote</p>
        </div>

        <div className={styles.arrow}>
          <FaLongArrowAltRight />
        </div>

        <div className={styles.step}>
          <span className={styles.icon}>
            <img src={result} alt="See Result" />
          </span>
          <p>See the result</p>
        </div>
      </div>

      
      <h3 className={styles.subtitle}>
        your vote matters, make it count
      </h3>

      
       <div className={styles.faq}>
      {data.map((item, index) => (
        <div className={styles.faqItem} key={index}>
          <div
            className={styles.question}
            onClick={() => toggle(index)}
          >
            <span>{item.q}</span>
            <span className={styles.arrow}>
              {openIndex === index ? <AiOutlineArrowDown /> : <AiOutlineArrowRight />}
            </span>
          </div>
          <div
            className={`${styles.answerWrapper} ${
              openIndex === index ? styles.open : ""
            }`}
          >
            <p>{item.a}</p>
          </div>

        </div>
      ))}
    </div>

    </div>
  );
};

export default HomePrinciple;
