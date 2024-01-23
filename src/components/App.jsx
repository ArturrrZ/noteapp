import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  function submitted(note){
    setNotes(prevValue=>{return [...prevValue,note]});
  }
  var [notes,setNotes] = useState([]);
  function deleteNotee(id){
    setNotes(prevValue=>{
      return prevValue.filter((item, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div>
      <Header title="NoteFlow"/>
      <CreateArea afterSubmit={submitted}/>
      {notes.map(
        function (note,index) {return <Note key={index} 
        id={index} title={note.title} content={note.content}
        deleteNote={deleteNotee}  />}
      )}
      
      <Footer />
    </div>
  );
}

export default App;
