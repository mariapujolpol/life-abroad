import React, { useState } from 'react';
import { useParams, Link } from "react-router-dom";

function EditJournal(props) {
     const selecedJournal = props.journalData.find((journal) => journal.id.toString() ===useParams().journalId);
    const [title, setTitle] = useState(selecedJournal.title);
    const [description, setDescription] = useState(selecedJournal.description);
    const [date, setDate] = useState(selecedJournal.date);
    const [mood, setMood] = useState(selecedJournal.mood.emoji);
    const [text, setText] = useState(selecedJournal.mood.text);
    const [reason, setReason] = useState(selecedJournal.mood.reason);
    const [link, setLink] = useState(selecedJournal.link);
    const [image, setImage] = useState(selecedJournal.image);

    const handleOnChange = (event) => {
        if (event.target.name === 'title') {
            setTitle(event.target.value);
        } else if (event.target.name === 'description') {
            setDescription(event.target.value);
        } else if (event.target.name === 'date') {
            setDate(event.target.value);
        } else if (event.target.name === 'mood') {
            setMood(event.target.value);
        } else if (event.target.name === 'text') {
            setText(event.target.value);
        } else if (event.target.name === 'reason') {
            setReason(event.target.value);
        } else if (event.target.name === 'link') {
            setLink(event.target.value);
        } else if (event.target.name === 'image') {
            setImage(event.target.value);
        }

        

    }

    const handleOnSubmit = (event) => {
        console.log("submit");
        event.preventDefault();
        // Handle form submission logic here
        const editedJournal = {
            id: selecedJournal.id,
            title,
            description,
            date,
            mood,
            text,
            reason,
            link,
            image
            
        }
        props.setJournalList((previousJournalList) => {
            console.log(previousJournalList);
            const result = previousJournalList.map((journal) =>
                journal.id === editedJournal.id ? editedJournal : journal
            );
            console.log (result);
            return result;
        });
        

    }

    function handleOnClick() {
        console.log("click");
    }

    const formInputStyle = { display: "flex", gap: "10px"  }    
    const formSectionStyle = {display: "flex", gap: "100px", justifyContent: "space-between" }
    return (
        
        <form onSubmit={handleOnSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px", width: "40%", padding: "20px", borderRadius: "10px" }}>
            <h2>
                Journal Entry
        </h2>
        <div style={formSectionStyle}>
            <div style={formInputStyle}>
            <label>Title</label>
            <input type="text" name="title" value={title} onChange={handleOnChange} />

            </div>
            <div style={formInputStyle}>
             <label>Date</label>
            <input type="date" name="date" value={date} onChange={handleOnChange} />
            </div>
        </div>
        <div style={formInputStyle}>
            <label>Description</label>
            
            <textarea style={{flex: "1"}}
            rows={4}
             placeholder="Write your journal entry..."
             name="description" value={description} onChange={handleOnChange}
/>
        </div>
            
            <div style={formSectionStyle}>
                <div style={formInputStyle}>
                    <label>Mood</label>
                <select name="mood" value={mood} onChange={handleOnChange}>
                    <option value="happy">😊 Happy</option>
                    <option value="sad">😢 Sad</option>
                    <option value="angry">😠 Angry</option>
                </select>

                </div>
                    <div style={formInputStyle}>
                 <label>Reason</label>
                <input type="text" name="reason" value={reason} onChange={handleOnChange} />
                    </div>


                

                

            </div>
            <div style={formSectionStyle}>
                <div style={formInputStyle}>
                   <label>Link</label>
            <input type="text" name="link" value={link} onChange={handleOnChange} /> 
                </div>
                <div>
                    <label>Image</label>
            <input type="text" name="image" value={image} onChange={handleOnChange} />
                    </div>
            </div>

            

            

            <Link to={`/journal-details/${selecedJournal.id}`}key={selecedJournal.id}><button type="submit" style={{width: "200px", textAlign: "center"}} >Save Journal</button>
            </Link>
        </form>
    )
}

export default EditJournal;