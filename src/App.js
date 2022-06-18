import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const App = () => {

  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    
    // console.log(note.title);
    // console.log(note.content);

    if(note.title === "" || note.content === ""){
      window.alert("All fields are mandatory!!")
    }
    else{
      setAddItem((oldData) => {
        return [...oldData, note];
      });
  
    }
    // console.log(note);

  };

  const onDelete = (id) =>{ 
    setAddItem((oldData) =>{
      return oldData.filter((currData, ind) => {
        return ind !== id;
      })
    })
   };

  return (
    <>
      <Header />
      <hr />
      
      <CreateNote getNote={addNote}/>

      {addItem.map((value, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={value.title}
            content={value.content}
            deleteItem={onDelete}
          />
        );
      })}

      <Footer />
    </>
  );
}

export default App;
