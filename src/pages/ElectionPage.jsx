import Competitors from "../components/competitors/Competitors"
import Footer from "../components/footer/Footer"
import VoteModal from "../components/modal/VoteModal"
import Timer from "../components/timer/Timer"

const ElectionPage = () => {
  return (
    <div>
        <Timer/>
       <Competitors/>
       <VoteModal/>
        <Footer/>
    </div>
  )
}

export default ElectionPage