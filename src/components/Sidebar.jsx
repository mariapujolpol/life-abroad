import { Link } from "react-router-dom";

function Sidebar(){
    const linkStyle = {color: "black", textAlign: "center"}
    return (
       <div className="sidebar">
            <Link to="/">
                <p>Journal</p>
            </Link>
            <Link to="/about">
                <p>About</p>
            </Link> 
        </div>
        
    )
    
}

export default Sidebar;