function JournalCard (props){
    return(
        <tr key={props.journal.id}>
                            <td>{props.journal.date}</td>
                            <td>{props.journal.title}</td>
                            <td>{props.journal.mood}</td>
                            <td>{props.journal.link}</td>
                            <td><button onClick={( )=>{props.deleteJournal(props.journal.id)}}>
                                delete</button></td>
                        </tr>)
    
}

export default JournalCard;
