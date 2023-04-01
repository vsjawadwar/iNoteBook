// import React from "react"; //Even if we don't import react then also fine.
import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) => {
  const host = "http://localhost:5001"
  const notesInitial = [

  ];
  const [notes, setNotes] = useState(notesInitial);
  //Get All Notes
  const getNotes = async () => {
    //Todo API Call 
    const response = await fetch(`${host}/api/note/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
    //To fix cors we need to install package at backend npm i cors  
  }
  //Add Notes
  const addNotes = async (title, description, tag) => {
    //Todo API Call 
    const response = await fetch(`${host}/api/note/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
  });
  const note= await response.json();
    //To fix cors we need to install package in backend npm i cors  
    setNotes(notes.concat(note));
  }
  //Delete Notes
  const deleteNotes = async (id) => {
    const response = await fetch(`${host}/api/note/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const json = response.json();
    console.log("Deleting the note with id " + id);
    console.log(json);
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
  }

  //Edit Notes̀
  const editNotes = async (id, title, description, tag) => {
    //API CALL for edit notes

    const response = await fetch(`${host}/api/note/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    console.log(json);
    //Logic to edit in client
    let newNotes=JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }

    }
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNotes, deleteNotes, editNotes, getNotes }}>
      {props.children}
    </NoteContext.Provider>

  )
}
export default NoteState;