import { use } from "react";

import { Link, useParams } from "react-router-dom";

function JournalDetails(props) {

    console.log(props.journalData);
    const selecedJournal = props.journalData.find((journal) => journal.id.toString() ===useParams().journalId);
    console.log(useParams());
    return (
        <div style={{backgroundColor: "#86ad9a", width:"100%", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center"}}>
            
            <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
                <h1>{selecedJournal.title}</h1>
                <p>{selecedJournal.date}</p>
            </div>
            <div style={{ display: "flex", gap: "20px", alignItems:"flex-start", padding: "20px", 
                          borderStyle: "solid", borderWidth: "1px", borderColor: "black", borderRadius: "10px"}}>
                <img style={{height: "400px", width: "400px", borderRadius:"200px"}} src={selecedJournal.image} alt={selecedJournal.title} />
                <div style={{display: "flex", flexDirection: "column", justifyContent:"flex-end", gap: "10px"}}>
                     <p style={{fontSize:"25px"}}>{selecedJournal.description}</p>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div style={{display: "flex", gap: "20px", fontSize:"25px"}}>
                            <p>{selecedJournal.mood.emoji}</p>
                            <p>{selecedJournal.mood.text}</p>        
                        </div>
                        <p style={{fontSize:"20px"}}>{selecedJournal.mood.reason}</p> 
                    </div>
                </div>
            </div>
            <br />
            <Link 
                style={{ textAlign:"center", padding: "20px", background: "linear-gradient(to bottom, #92c2c4, #075d64)",
                           color: "black", width: "200px", borderRadius: "10px" }} 
                to="/"
            >
                Back to Journal
            </Link>
            <Link
                style={{ textAlign:"center", padding: "20px", background: "linear-gradient(to bottom, #92c2c4, #075d64)",
                           color: "black", width: "200px", borderRadius: "10px" }} 
                to={`/journal-edit/${selecedJournal.id}`}>
            
                Edit Journal
            </Link>
            
        </div>  
    )

}

export default JournalDetails;