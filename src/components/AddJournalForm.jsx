import React, { useState } from 'react';

function AddJournalForm(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [mood, setMood] = useState('');
    const [text, setText] = useState('');
    const [reason, setReason] = useState('');
    const [link, setLink] = useState('');
    const [image, setImage] = useState('');

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
        event.preventDefault();
        // Handle form submission logic here
        const newJournal = {
            id:(Math.random()*10000).toFixed(0),
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
            return [...previousJournalList, newJournal];
        });
        setTitle('');
        setDescription('');
        setDate('');
        setMood('');
        setText('');
        setReason('');
        setLink('');
        setImage('');

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

            

            

            <button type="submit" style={{width: "200px", textAlign: "center"}}>Add Journal</button>
        </form>
    )
}

export default AddJournalForm;