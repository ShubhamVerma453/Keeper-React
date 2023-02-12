import React, { useState } from "react";

function NewNote(props) {
    const[title, setTitle] = useState("");
    function changeTitle(event){
        let newTitle = event.target.value;
        setTitle(newTitle);
        // console.log(title);
    }
    const[content, setContent] = useState("");
    function changeContent(event){
        let newContent = event.target.value;
        setContent(newContent);
        // console.log(content);
    }

    function addClick(event){
        event.preventDefault();
        props.addNote(title, content);
        setTitle("");
        setContent("");
    }


  return (
    <div>
      <form>
        <input value={title} onChange={changeTitle} name="title" placeholder="Title" />
        <textarea value={content} onChange={changeContent} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={ addClick} >Add</button>
      </form>
    </div>
  );
}

export default NewNote;
