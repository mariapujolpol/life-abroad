import { useState } from "react";
import JournalCard from "./JournalCard";
import { Link } from "react-router-dom";
import AddJournalForm from "./AddJournalForm";

//console.log(journalData);

function MainContent(props){

    
   
   
    const deleteJournal = (journalId ) => { 
        props.setJournalList( (previousJournalList) => {
            return previousJournalList.filter( (journal) => journal.id !== journalId )
        } )
    }
    return (
        <div className="main-content" style={{ display: "flex", flexDirection: "column", position: "relative", zIndex: 1001}}>
            
            <div className="form-wrap"> 
                <AddJournalForm setJournalList={props.setJournalList}></AddJournalForm>
            </div>
            <div className="journal-header">
                <span className="journal-header-cell">Date</span>
                <span className="journal-header-cell">Title</span>
                <span className="journal-header-cell">Mood</span>
                <span className="journal-header-cell">Link</span>
                <span className="journal-header-cell">Delete</span>
            </div>
            <br />
            <div className="journal-list">
                { props.journalData.map( (journal) => {
                    return ( 
                        <Link className="journal-link" to={`/journal-details/${journal.id}`}key={journal.id}><JournalCard  journal={journal} deleteJournal={deleteJournal}></JournalCard></Link>
                    )    
                } )}
            </div>
        </div>   
    )

}

export default MainContent;
