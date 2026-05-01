import Modal from "react-modal";
import styles from "./vote.module.scss";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { handaleModal } from "../../features/modal/modalSlice";
import {
  setInCreament,
  setDiCreament,
  addToCompetitors,
  reset,
} from "../../features/competitor/competitorSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";





Modal.setAppElement("#root");

const VoteModal = () => {
  const dispatch = useDispatch();
const [loading, setLoading] = useState(false);
  const[formatDate, setFormatDate] = useState({
  name: "",
  studentID: "",
  program: "",
  department: "",
  candidate:"",
  candidateName:""
});

const handleInputChange = (e) => {
  setFormatDate({
    ...formatDate,
    [e.target.name]: e.target.value,
  });
};
console.log(formatDate)

// const handelSubmit = async(e) => {
//   e.preventDefault();
//   setLoading(true);
//    dispatch(addToCompetitors(currentCompetitor._id)); 
//     dispatch(reset());
//     closeModal();
  const handelSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    if (!currentCompetitor) {
      toast.error("No candidate selected");
      return;
    }

    const payload = {
      name: formatDate.name.toLowerCase().trim(),
      studentID: formatDate.studentID.trim(),
      program: formatDate.program,
      department: formatDate.department,
      candidate: currentCompetitor.name,        // ✅ STRING
      candidateName: currentCompetitor.name
    };

    console.log("PAYLOAD:", payload);

    const { data } = await axios.post(
      "/api/user/vote-register",
      payload
    );

    console.log("SUCCESS:", data);

    toast.success(data.message);

    // ✅ AFTER SUCCESS
    dispatch(addToCompetitors(currentCompetitor._id));
    dispatch(reset());
    closeModal();

  } catch (error) {
    console.log("ERROR:", error.response?.data);

    toast.error(
      error.response?.data?.message ||
      "Something went wrong"
    );
  } finally {
    setLoading(false);
  }
};



  const { isOpen } = useSelector((store) => store.modal);
  const { currentCompetitor, votCount } = useSelector(
    (store) => store.competitor
  );

  const closeModal = () => {
    dispatch(handaleModal());
  };

  if (!currentCompetitor) return null;

  const imageUrl = currentCompetitor.img
    ? `http://localhost:8000/${currentCompetitor.img}`
    : "";

 

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.wrapper}>
        
        <div className={styles.left}>
          <div
            className={styles.image}
            style={{
              backgroundImage: imageUrl
                ? `url(${imageUrl})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className={styles.bio}>
            <div className={styles.infoRow}>
              <span>Name: </span>
              <h4>{currentCompetitor.name}</h4>
            </div>

            <div className={styles.infoRow}>
              <span>Department: </span>
              <h4>{currentCompetitor.department}</h4>
            </div>

            <div className={styles.vision}>
              <label>Vision: </label>
              <span>{currentCompetitor.vision}</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <h2>Vote Registration</h2>

          <form onSubmit={handelSubmit} className={styles.form}>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formatDate.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              placeholder="Student ID"
              name="studentID"
              value={formatDate.studentID}
              onChange={handleInputChange}
              required
            />

            <select name="program" value={formatDate.program} onChange={handleInputChange} required>
              <option value="">Select Program</option>
              <option value="Regular">Regular</option>
              <option value="Extension">Extension</option>
            </select>

            <select name="department" value={formatDate.department} onChange={handleInputChange} required>
              <option value="">Select your Department</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Software Engineering">Software Engineering</option>
            </select>

            {/* Auto-filled candidate */}
            <input
              type="text"
              name="candidate"
              value={currentCompetitor.name}
              onChange={handleInputChange}
              readOnly
            />

            <div className={styles.voteBox}>
              <span>Purchase Votes</span>

              <div className={styles.counter}>
                {/* <button
                  type="button"
                  onClick={() => dispatch(setInCreament())}
                >
                  <AiOutlinePlus />
                </button> */}

                <span>{votCount}</span>

                {/* <button
                  type="button"
                  onClick={() => dispatch(setDiCreament())}
                >
                  <AiOutlineMinus />
                </button> */}
              </div>
            </div>

            <button type="submit">Vote Now</button>
          </form>
        </div>

      </div>
    </Modal>
  );
};

export default VoteModal;
