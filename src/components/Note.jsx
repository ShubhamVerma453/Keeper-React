import React from "react";

function Note(prop) {
    return <div className="note">
        <h1>{prop.title}</h1>
        <p>{prop.content}</p>
        <button>DELETE</button>
        </div>
}

export default Note;