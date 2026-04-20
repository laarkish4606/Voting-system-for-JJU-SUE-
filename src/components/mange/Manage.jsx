import React, { useState } from "react";
import Styles from "./manage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import AddCandidate from "./AddCandidate";
import { deleteCandidate } from "../../features/competitor/competitorSlice";
const Manage = () => {
  const { competitors } = useSelector((store) => store.competitor);
  console.log(competitors)

  const [showModal, setShowModal] = useState(false);


const dispatch=useDispatch();

  return (
    <div className={Styles.container}>
    
      <div className={Styles.manage}>
        <h1>Manage Candidates</h1>
        <button onClick={() => setShowModal(true)}>
          + Add Candidate
        </button>
      </div>

  
      <div className={Styles.candidates}>
        {competitors.map((competitor) => (
          <div className={Styles.card} key={competitor.id}>
            <div
              className={Styles.image}
              style={{
                backgroundImage: `url(${competitor.image})`,
              }}
            />
            <div className={Styles.info}>
              <h3>Name: {competitor.name}</h3>
              <span>Department: {competitor.department}</span>
            </div>
            <div className={Styles.actions}> 
              <button className={Styles.edit}>Edit</button> 
            <button className={Styles.delete} onClick={() => dispatch(deleteCandidate(competitor.id))}>
              Delete
            </button> 
            </div>

          </div>
        ))}
      </div>


   {showModal && (
  <div className={Styles.modalWrapper}>
    <div className={Styles.modalBox}>
      
      <button
        className={Styles.closeBtn}
        onClick={() => setShowModal(false)}
      >
        ✖
      </button>

      <div className={Styles.modalContent}>
        <AddCandidate />
      </div>

    </div>
  </div>
)}


    </div>
  );
};

export default Manage;
