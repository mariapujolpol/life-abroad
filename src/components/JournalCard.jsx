function JournalCard (props){
    const componentStyle = { flexBasis: "20%", textAlign:"center", color: "black", padding: "10px" }
    return(
       <div style={{display: "flex"}}>
            <span style={componentStyle}>{props.journal.date}</span>
            <span style={componentStyle}>{props.journal.title}</span>
            <span style={componentStyle}>{props.journal.mood.emoji}</span>
            <span style={{ flexBasis: "20%", display: "inline-block", overflowWrap:"break-word", wordBreak:"break-all", textAlign:"center", color: "black"}}>{props.journal.link}</span>
            <span style={componentStyle} onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()
                {props.deleteJournal(props.journal.id)}
            }}>🗑️</span>
        </div>
    )
    
}

export default JournalCard;
