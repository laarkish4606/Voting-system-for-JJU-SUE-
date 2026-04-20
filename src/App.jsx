
import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"

import HomePage from "./pages/HomePage"
import ElectionPage from "./pages/ElectionPage"
import ManagePage from "./pages/ManagePage"
import ResultPage from "./pages/ResultPage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"

function App() {

  return (
    <>
       <Header/>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/election" element={<ElectionPage/>}/>
        <Route path="/manage" element={<ManagePage/>}/>
        <Route path="/result" element={<ResultPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
       </Routes>
       
    </>
 
  )
}

export default App
