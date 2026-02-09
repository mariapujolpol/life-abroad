import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import "./App.css"
import MainContent from "./components/MainContent"

import AboutPage from "./pages/AboutPage"
import JournalDetails from "./pages/JournalDetails"
import NotFoundPage from "./pages/NotFoundPage"
import { Routes, Route, Link } from "react-router-dom"
import journalData from "./assets/journalData.json"
import { useState } from "react"
import JournalEdit from "./pages/EditJournal"

function App() {
  const [journalList, setJournalList] = useState ( journalData)

 
  
  

  return (
    <div className= "container">

    
        
    
       <Navbar></Navbar>
     

     <div className="center-body">
      <Sidebar></Sidebar>
      
      <Routes>
        <Route path="/" element={<MainContent journalData={journalList} setJournalList={setJournalList} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/journal-details/:journalId" element={<JournalDetails journalData={journalList} />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/journal-edit/:journalId" element={<JournalEdit journalData={journalList} setJournalList={setJournalList} />} />
  
      </Routes>
      
      


     </div>

     <Footer></Footer>
    

    </div>
    
    
    
  )
}

export default App
