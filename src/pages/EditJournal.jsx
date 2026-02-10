import React, { useState } from 'react';
import { useParams, Link } from "react-router-dom";

function EditJournal(props) {

    const selecedJournal = props.journalData.find((journal) => journal.id.toString() === useParams().journalId);
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
            if (event.target.value === "😊") {
                setText("Happy");
            } else if (event.target.value === "😢") {
                setText("Sad");
            } else if (event.target.value === "😡") {
                setText("Angry");
            } 
        } else if (event.target.name === 'reason') {
            setReason(event.target.value);
        } else if (event.target.name === 'link') {
            setLink(event.target.value);
        } else if (event.target.name === 'image') {
            setImage(event.target.value);
        }
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission logic here
        const editedJournal = {
            id: selecedJournal.id,
            title: title,
            description: description,
            date: date,
            mood: {
                emoji: mood,
                text: text,
                reason: reason
            },
            link: link,
            image: image
        }
         props.setJournalList((previousJournalList) => {
            console.log(previousJournalList);
            const result = previousJournalList.map((journal) =>
                journal.id === editedJournal.id ? editedJournal : journal
            );
            console.log(result);
            return result;
        });

    }

    const formInputStyle = { display: "flex", gap: "10px", height: "50px" }
    const labelStyle = {display: "flex", justifyContent: "center", alignItems: "center"}
    const formSectionStyle = { display: "flex", gap: "100px", justifyContent: "space-between" }
    return (
        <div style={{width: "100%", backgroundColor: "#86ad9a", display: "flex", justifyContent: "center", alignItems: "start", paddingTop: "50px"}}>
            <form 
                onSubmit={handleOnSubmit} 
                style={{ 
                    display: "flex", flexDirection: "column", gap: "20px", 
                    width: "60%", padding: "20px", backgroundColor: "#86ad9a",
                    borderStyle: "solid", borderWidth: "1px", borderRadius: "10px",
                }}>
                <h2 style={{textAlign: "center"}}>Journal Entry</h2>
                <div style={formSectionStyle}>
                    <div style={formInputStyle}>
                        <label style={labelStyle}>Title</label>
                        <input type="text" name="title" value={title} onChange={handleOnChange} />
                    </div>
                    <div style={formInputStyle}>
                        <label style={labelStyle}>Date</label>
                        <input type="date" name="date" value={date} onChange={handleOnChange} />
                    </div>
                </div>
                <div style={formInputStyle}>
                    <label style={labelStyle}>Description</label>
                    <textarea style={{ flex: "1" }}
                        rows={4}
                        placeholder="Write your journal entry..."
                        name="description" value={description} onChange={handleOnChange}
                    />
                </div>
                <div style={formSectionStyle}>
                    <div style={formInputStyle}>
                        <label style={labelStyle}>Mood</label>
                        <select name="mood" value={mood} onChange={handleOnChange}>
                            <option value="😊">😊 Happy</option>
                            <option value="😢">😢 Sad</option>
                            <option value="😡">😡 Angry</option>
                        </select>
                    </div>
                    <div style={formInputStyle}>
                        <label style={labelStyle}>Reason</label>
                        <input type="text" name="reason" value={reason} onChange={handleOnChange} />
                    </div>
                </div>
                <div style={formSectionStyle}>
                    <div style={formInputStyle}>
                        <label style={labelStyle}>Link</label>
                        <input type="text" name="link" value={link} onChange={handleOnChange} />
                    </div>
                    <div style={formInputStyle}>
                        <label style={labelStyle}>Image</label>
                        <input type="text" name="image" value={image} onChange={handleOnChange} />
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "center", gap: "20px"}}>
                    <button 
                        type="submit" 
                        style={{ 
                            textAlign:"center", padding: "20px", background: "linear-gradient(to bottom, #92c2c4, #075d64)",
                            color: "black", width: "200px", borderRadius: "10px" 
                        }} >
                        Save Journal
                    </button>
                    <Link 
                        to={`/journal-details/${selecedJournal.id}`} 
                        key={selecedJournal.id}
                    >
                        <button 
                            type="button" 
                            style={{ 
                                textAlign:"center", padding: "20px", background: "linear-gradient(to bottom, #92c2c4, #075d64)",
                                color: "black", width: "200px", borderRadius: "10px" 
                            }}  
                        >
                        Back Button
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
    
} 

export default EditJournal;