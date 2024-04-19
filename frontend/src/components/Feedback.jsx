import React from "react";
import "../styles/Note.css"

function Feedback({ feedback, onDelete }) {
    const formattedDate = new Date(feedback.created_at).toLocaleDateString("se-SE")

    return (
        <div className="note-container">
            <p className="note-title">{feedback.title}</p>
            <p className="note-content">{feedback.content}</p>
            <p className="note-content">{feedback.email}</p>
            <p className="note-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(feedback.id)}>
                Delete
            </button>
        </div>
    );
}

export default Feedback