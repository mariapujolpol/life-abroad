import logo from "../img/relovatelogof.png"
import name from "../img/relovatetitle.png"
function Navbar(){
    return(
        <div className="navbar">

        <img src={logo}style={{height:"40px", width: "50px" }} alt="logo" /> 
        <img src={name}style={{height:"40px", width: "50px" }} alt="logo" /> 
        
          </div>
    )
 
}

export default Navbar;