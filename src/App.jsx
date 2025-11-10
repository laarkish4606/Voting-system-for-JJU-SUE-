
import Competitors from "./components/competitors/Competitors"
import Header from "./components/header/Header"
import VoteModal from "./components/modal/VoteModal"
import Timer from "./components/timer/Timer"

function App() {

  return (
    <div>
       <Header/>
       <Timer/>
       <Competitors/>
       <VoteModal />
    </div>
 
  )
}

export default App
