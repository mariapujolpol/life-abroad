import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom to create navigation links

function Sidebar(props){
    const linkStyle = {color: "black", textAlign: "center"}
    

    return (
    
       <div className={`sidebar ${props.isOpen ? "sidebar-expanded" : "sidebar-collapsed"}`}>

       

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
