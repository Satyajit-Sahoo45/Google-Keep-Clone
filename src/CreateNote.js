import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
  const[expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {

    // const value = event.target.value;
    // const name = event.target.name;

    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,

      };
    });
  }

  const submitNote = () => {
    props.getNote(note);
    setNote({
      title: "",
      content: "",
    })
  };

  const expandIt = () =>{
    setExpand(true);
  }

  const backToNormal = () =>{
    setExpand(false);
  }


  return (
    <>
      <div className="main_note"  onDoubleClick={backToNormal}>
        <form>
         { expand?
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={inputEvent}
            placeholder="Title"
            autoComplete="off"
          /> : null}
          <textarea
            cols=""
            rows=""
            name="content"
            value={note.content}
            onChange={inputEvent}
            placeholder="Take a note..."
            onClick={expandIt}
            ></textarea>

         { expand?
          <Button onClick={submitNote}>
            <AddIcon className="plus-sign" />
          </Button> : null}
        </form>
      </div>
    </>
  );
}

export default CreateNote;