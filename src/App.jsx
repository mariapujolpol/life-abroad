import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import "./App.css"
import MainContent from "./components/MainContent"

import AboutPage from "./pages/AboutPage"
import JournalDetails from "./pages/JournalDetails"
import NotFoundPage from "./pages/NotFoundPage"
import { Routes, Route, Link } from "react-router-dom"



function App() {
  

  return (
    <div className= "container">
      
        
    
       <Navbar></Navbar>
     

     <div className="center-body">
      <Sidebar></Sidebar>
      
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/journal-details/:journalId" element={<JournalDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      
      


     </div>

     <Footer></Footer>
    

    </div>
    
    
    
  )
}

export default App
