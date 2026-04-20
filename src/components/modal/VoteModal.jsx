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

Modal.setAppElement("#root");

const VoteModal = () => {
  const dispatch = useDispatch();

  const { isOpen } = useSelector((store) => store.modal);
  const { currentCompetitor, votCount } = useSelector(
    (store) => store.competitor
  );

  const closeModal = () => {
    dispatch(handaleModal());
  };

  if (!currentCompetitor) return null;

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addToCompetitors(currentCompetitor.id));
    dispatch(reset());
    closeModal();
  };

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
              backgroundImage: `url(${currentCompetitor?.image})`,
            }}
          >

          </div>

          <div className={styles.bio}>
             <div className={styles.infoRow}>
            <span>Name: </span>
            <h4>{currentCompetitor.name}</h4>
          </div>

          <div className={styles.infoRow}>
            <span>Department: </span>
            <h4>{currentCompetitor.depart}</h4>
          </div>
          <div className={styles.vision}>
            <label>Vision:  </label>
            <span>{currentCompetitor.vision}</span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <h2>Vote Registration</h2>

          <form onSubmit={handelSubmit} className={styles.form}>
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Student ID" required />
            <select name="program" id="program" required>
              <option value="">Select Program</option>
              <option value="Computer Science">Regular</option>
              <option value="Information Technology">Extension</option>
            </select>
            <select name="departmen" id="departmen" required>
              <option value="">Select your Department</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Software Engineering">hydrolic Engineering</option>
              <option value="Software Engineering">patrolium Engineering</option>
              <option value="Software Engineering">construction Engineering</option>
              <option value="Software Engineering">electrical Engineering</option>
              <option value="Software Engineering">DRM</option>
              <option value="Software Engineering">HRM</option>
              <option value="Software Engineering">nurse</option>
              <option value="Software Engineering">midwife</option>
              <option value="Software Engineering">labratory</option>


            </select>
            <input type="password" placeholder="Candidate Name" required />

           
            <div className={styles.voteBox}>
              <span>Purchase Votes</span>

              <div className={styles.counter}>
                <button
                  type="button"
                  onClick={() => dispatch(setInCreament())}
                >
                  <AiOutlinePlus />
                </button>

                <span>{votCount}</span>

                <button
                  type="button"
                  onClick={() => dispatch(setDiCreament())}
                >
                  <AiOutlineMinus />
                </button>
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
