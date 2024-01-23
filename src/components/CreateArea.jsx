import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
  // styling
  var [expanded,setExpanded] = useState(false);
  function isExpanded(){
    setExpanded(true);
  }

  var [inputText,setInputText] = useState({
    title: "",
    content: ""
  });
  function handleChange (event) {
     var {name,value} = event.target;
     setInputText(
      prevValue=>{
        return {...prevValue, [name]:value}
      }
     )
  }
  function handleSubmit(event) {
    props.afterSubmit(inputText);
    setInputText({title:"",content:""})
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
      {expanded && <input name="title" placeholder="Title" value={inputText.title} onChange={handleChange}/>}
        
        <textarea name="content" placeholder="Take a note..." rows={expanded?"3":1} value={inputText.content} 
        onChange={handleChange} onClick={isExpanded} />
        {expanded &&
        <Zoom in={isExpanded}>
         <button ><AddIcon/></button></Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;
