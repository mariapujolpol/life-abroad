function JournalCard (props){
    return(
       <div className="journal-card">
            <span className="journal-card-cell">{props.journal.date}</span>
            <span className="journal-card-cell">{props.journal.title}</span>
            <span className="journal-card-cell">{props.journal.mood.emoji}</span>
            <span className="journal-card-cell journal-card-link">{props.journal.link}</span>
            <span className="journal-card-cell journal-card-delete" onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()
                {props.deleteJournal(props.journal.id)}
            }}>🗑️</span>
        </div>
    )
    
}

export default JournalCard;
