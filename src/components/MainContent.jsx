import { useState } from "react";
import journalData from "../assets/journalData.json";
import JournalCard from "./JournalCard";
import { Link } from "react-router-dom";

//console.log(journalData);

function MainContent(){

   
    const [journalList, setJournalList] = useState ( journalData)  
    const deleteJournal = (journalId ) => { 
        setJournalList( (previousJournalList) => {
            return previousJournalList.filter( (journal) => journal.id !== journalId )
        } )
    }
    const componentStyle = { flexBasis: "20%", textAlign:"center", color: "black", padding: "20px" }
    const lineStyle = { height: "1px", backgroundColor: "black", margin: "10px 0", border: "none" }
    
    return (
        <div className="main-content">
            <div style={{ display: "flex", fontWeight: "bold", background: "linear-gradient(to bottom, #92c2c4, #075d64)" }}>
                <span style={componentStyle}>Date</span>
                <span style={componentStyle}>Title</span>
                <span style={componentStyle}>Mood</span>
                <span style={componentStyle}>Link</span>
                <span style={componentStyle}>Delete</span>
            </div>
            <br />
            <div>
                { journalList.map( (journal) => {
                    return ( 
                        <Link to={`/journal-details/${journal.id}`}key={journal.id}><JournalCard  journal={journal} deleteJournal={deleteJournal}></JournalCard></Link>
                    )    
                } )}
            </div>
        </div>   
    )

}

export default MainContent;
