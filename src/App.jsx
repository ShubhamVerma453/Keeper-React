import React, { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import noteContent from "./components/noteContent"
import NewNote from "./components/NewNote";

function App (){
    const[notes, setNotes] = useState(noteContent);

    function addNote(title, content){
        let obj = {
            title : title,
            content : content
        }
        setNotes(preValues=>{
            console.log(preValues);
            let newObj = [...preValues, obj];
            return newObj;
        })
    }

    function deleteNote(id){
        let newNotes = notes.filter((note, index) =>(id!=index));
        setNotes(newNotes);
    }


    return <div>
        <Header />
        <NewNote 
            addNote = {addNote}
        />

        {notes.map((data, index) =>{
            return <Note 
            key = {index}
            id = {index}
            title = {data.title}
            content = {data.content}
            delete = {deleteNote}
        />
        })}

        <Footer />
        </div>
}

export default App;