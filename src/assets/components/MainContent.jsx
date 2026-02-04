import { useState } from "react";
import journalData from "../journalData.json";
import JournalCard from "./JournalCard";

//console.log(journalData);

function MainContent(){

   
    const [journalList, setJournalList] = useState ( journalData)  
    const deleteJournal = (
        journalId ) => {setJournalList((previousJournalList) => {
        return previousJournalList.filter((journal) => journal.id !== journalId)})
        }

    
    return (
        <table className="main-content">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Mood</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                
                    {journalList.map((journal) => {
                        return ( 
                            <JournalCard key={journal.id} journal={journal} deleteJournal={deleteJournal}></JournalCard>
                            
                        
                        )
                    })}
               
            </tbody>
        </table>
    )
}

export default MainContent;
