import Footer from "./assets/components/Footer"
import Navbar from "./assets/components/Navbar"
import Sidebar from "./assets/components/Sidebar"
import "./App.css"
import MainContent from "./assets/components/MainContent"





function App() {
  

  return (
    <div className= "container">
      
        
      
    
       <Navbar></Navbar>
     

     <div className="center-body">
      <Sidebar></Sidebar>
      <MainContent></MainContent>


     </div>

     <Footer></Footer>
    

    </div>
    
    
    
  )
}

export default App
