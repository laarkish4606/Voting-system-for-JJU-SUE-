import React, { useState } from "react";
import Styles from "./manage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteCandidate } from "../../features/competitor/competitorSlice";
import AddCandidate from "./AddCandidate";
 import axios from "axios";
import { useEffect } from "react";
import { data } from "react-router-dom";
import toast from "react-hot-toast";
const Manage = () => {

const handleDelete = async (id) => {
  try {
    const { data } = await axios.delete(
      `/api/admin/delete-candidate/${id}`
    );

    toast.success(data.message);
    setCandidates((prev) =>
      prev.filter((c) => c._id !== id)
    );

  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Delete failed";

    toast.error(message);
  }
};



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

  const [showModal, setShowModal] = useState(false);
  return (
    <div className={Styles.container}>
    
      <div className={Styles.manage}>
        <h1>Manage Candidates</h1>
        <button onClick={() => setShowModal(true)}>
          + Add Candidate
        </button>
      </div>

  
      <div className={Styles.candidates}>
        {candidates.map((candidate) => (
          <div className={Styles.card} key={candidate.id}>
            <div
              className={Styles.image}
              style={{
               backgroundImage: `url(http://localhost:8000/${candidate.img})`

                
              }}
              
            />
            <div className={Styles.info}>
              <h3>Name: {candidate.name}</h3>
              <span>Department: {candidate.department}</span>
            </div>
            <div className={Styles.actions}> 
              <button className={Styles.edit}>Edit</button> 
            <button className={Styles.delete} onClick={() => handleDelete(candidate._id)}>
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
        <AddCandidate/>
      </div>

    </div>
  </div>
)}


    </div>
  );
};

export default Manage;
