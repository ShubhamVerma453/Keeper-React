import React from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import noteContent from "./components/noteContent"

function App (){
    return <div>
        <Header />
        
        {noteContent.map(data =>{
            return <Note 
            key = {data.key}
            title = {data.title}
            content = {data.content}
        />
        })}

        <Footer />
        </div>
}

export default App;