import React, { useState } from 'react';

{/*import '../styles/form.css'; {/* Importing CSS for styling the form */}

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

    return (
        <form onSubmit={handleOnSubmit} className="journal-form">
            <h2 className="form-title">Journal Entry</h2>
            <div className="form-section">
                <div className="form-field">
                    <label>Title</label>
                    <input
                        className="form-input"
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="form-field">
                    <label>Date</label>
                    <input
                        className="form-input"
                        type="date"
                        name="date"
                        value={date}
                        onChange={handleOnChange}
                    />
                </div>
            </div>
            <div className="form-field form-field--full">
                <label>Description</label>
                <textarea
                    className="form-input form-textarea"
                    rows={4}
                    placeholder="Write your journal entry..."
                    name="description"
                    value={description}
                    onChange={handleOnChange}
                />
            </div>
            <div className="form-section">
                <div className="form-field">
                    <label>Mood</label>
                    <select
                        className="form-input"
                        name="mood"
                        value={mood}
                        onChange={handleOnChange}
                    >
                        <option value="happy">😊 Happy</option>
                        <option value="sad">😢 Sad</option>
                        <option value="angry">😠 Angry</option>
                    </select>
                </div>
                <div className="form-field">
                    <label>Reason</label>
                    <input
                        className="form-input"
                        type="text"
                        name="reason"
                        value={reason}
                        onChange={handleOnChange}
                    />
                </div>
            </div>
            <div className="form-section">
                <div className="form-field">
                    <label>Link</label>
                    <input
                        className="form-input"
                        type="text"
                        name="link"
                        value={link}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="form-field">
                    <label>Image</label>
                    <input
                        className="form-input"
                        type="text"
                        name="image"
                        value={image}
                        onChange={handleOnChange}
                    />
                </div>
            </div>
            <button type="submit" className="primary-button">Add Journal</button>
        </form>
    )
}

export default AddJournalForm;