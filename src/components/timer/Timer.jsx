import Times from "./time";
import styles from "./timer.module.scss"
import Countdown from 'react-countdown';

const Timer = () => {

   const Completion = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days,hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completion />;
  } else {
    // Render a countdown
    return <Times days={days} hours={hours}minutes={minutes}seconds={seconds}/>
      
  }
};

 
  return (
    <div className={styles.cunter_down}>
          <Countdown
    date={Date.now() + 2592000000}
    renderer={renderer}
  />
        
        </div>
    
  )
}

export default Timer