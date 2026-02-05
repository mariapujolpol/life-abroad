import logo from "../assets/img/relovatelogof.png"
import name from "../assets/img/relovatetitle.png"
function Navbar(){
    return(
        <div className="navbar">

        <img src={logo}style={{height:"100px", width: "150px" }} alt="logo" /> 
        <img src={name}style={{height:"150px", width: "200px" }} alt="logo" /> 
        
          </div>
    )
 
}

export default Navbar;


