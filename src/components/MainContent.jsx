import { useState } from "react";
import JournalCard from "./JournalCard";
import { Link } from "react-router-dom";
import AddJournalForm from "./AddJournalForm";
import SearchBar from "./SearchBar";


function MainContent(props){

    const [searchTerm, setSearchTerm] = useState("");
    const deleteJournal = (journalId ) => { 
        props.setJournalList( (previousJournalList) => {
            return previousJournalList.filter( (journal) => journal.id !== journalId )
        } )

    }
    const [mood, setMood] = useState("");
    const handleOnChange = (event) => {
        setMood(event.target.value);
        console.log(mood);
    };
    const filteredJournals = props.journalData.filter(journal => 
        journal.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (mood === "" || journal.mood.emoji === mood)
    );

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
            <div className="search-filter-row">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}></SearchBar>
                <div className="filter-group">
                    <label className="filter-label">Filter by mood</label>
                    <select className="filter-select" name="mood" value={mood} onChange={handleOnChange}>
                        <option value="">All</option>
                        <option value="😊">😊 Happy</option>
                        <option value="😢">😢 Sad</option>
                        <option value="😡">😡 Angry</option>
                    </select>
                </div>
            </div>
            
            <br />
            {(filteredJournals.length === 0 ? <p style={{textAlign: "center"}}>No journals found.</p> :
                <div className="journal-list">
                { filteredJournals.map( (journal) => {
                    return ( 
                        <Link className="journal-link" to={`/journal-details/${journal.id}`}key={journal.id}><JournalCard  journal={journal} deleteJournal={deleteJournal}></JournalCard></Link>
                    )    
                })}
                </div>
            )}
        </div>   
    )

}

export default MainContent;
