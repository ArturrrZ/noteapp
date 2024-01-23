import React from "react";
import EditNoteIcon from '@mui/icons-material/EditNote';
function Header(props) {
  return (
    <header>
      <h1><EditNoteIcon/>  {props.title}</h1>
    </header>
  );
}

export default Header;
