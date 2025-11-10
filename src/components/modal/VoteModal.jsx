import Modal from 'react-modal';
import styles from "./vote.module.scss"
import { AiOutlineMinus,AiOutlinePlus} from "react-icons/ai";
import { useSelector,useDispatch}from "react-redux"
import { handaleModal } from '../../features/modal/modalSlice';
import { setInCreament,setDiCreament, addToCompetitors, reset } from '../../features/competitor/competitorSlice';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};




Modal.setAppElement('#root');

const VoteModal = () => {
 
  // dispatcht initiaization 
  const dispatch=useDispatch();
  

  // using useselctor 
  const {isOpen}=useSelector((store)=> store.modal)
  const {currentCompetitor,votCount}=useSelector((store)=> store.competitor)
  // const votCount=useSelector((store)=> store.competitor.votCount)
  // console.log(votCount)
  // console.log(currentCompetitor)
 
  
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    dispatch(handaleModal())
  };
  
  if(!currentCompetitor) return

   const backgroundStyle = {
  width: "95%",
  height: "150px",
  background: `linear-gradient(0deg, #128b4871, rgba(0,0,0,0) 60%, rgba(0,0,0,0)), url(${currentCompetitor ?.image || "" })`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  borderBottomRightRadius:"10px",
 
  
};

const handelSubmit=(event)=>{
  event.preventDefault();
  dispatch(addToCompetitors(currentCompetitor.id))
  dispatch(reset())
  closeModal();
 
}

 
  return (
    
    <div>
    
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.modal_container}>
          <div className={styles.competitor_info}>
            <div style={backgroundStyle}></div>
            <div className={styles.bio}>
              <div className={styles.divider}>
                <label htmlFor="">Name</label>
                <span>{currentCompetitor.name}</span>
              </div>
              <div className={styles.divider}>
                <label htmlFor="">Region</label>
                <span>{currentCompetitor.region}</span>
              </div>
              <div className={styles.divider}>
                <label htmlFor="">Vission</label>
                <span>{currentCompetitor.vision}
                   .</span>
              </div>
             
            </div>

          </div>
           </div>
           <div className={styles.vote_container}>
            <div className={styles.vote_count}>
             <span>purchase voices</span>
            <div className={styles.vote_controler}>
              <button type='button' >
              <AiOutlinePlus className={styles.icon} onClick={()=> dispatch(setInCreament())}/>
              </button>
              <span>{votCount}</span>
              <button type='button'>
              <AiOutlineMinus className={styles.icon} onClick={()=>dispatch(setDiCreament())}/>
              </button>
            </div>
            </div>
            
         
          <form onSubmit={handelSubmit}>
            <span>pay with Ebirr,Ekaafi and Esahal</span>
            <input type="text" placeholder='enter your number' className={styles.form_controler}></input>
            <button type='submit'>vote now</button>
          </form>
           </div>

       
      </Modal>
    </div>
  )
}

export default VoteModal