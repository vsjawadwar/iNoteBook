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
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjNWYzYzQ0ZTI2ODg3MDA5ODRhNjgyIn0sImlhdCI6MTY3NDAwMTk0Nn0.ELOv6xxgFuLF3TlRSJ27Vjmld1UFyjBIpWWNYy4L1t4'
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
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjNWYzYzQ0ZTI2ODg3MDA5ODRhNjgyIn0sImlhdCI6MTY3NDAwMTk0Nn0.ELOv6xxgFuLF3TlRSJ27Vjmld1UFyjBIpWWNYy4L1t4'
      },
      body: JSON.stringify({ title, description, tag })
  });
  const data=await response.json();
    console.log(data);
    //To fix cors we need to install package in backend npm i cors  
    const note = {
      "_id": "63d1a9cf40d1e0dd460fe00",
      "user": "63c5f3c44e2688700984a685",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-01-25T22:14:39.599Z",
      "__v": 0
    };
    setNotes(notes.concat(note));
  }
  //Delete Notes
  const deleteNotes = async (id) => {
    const response = await fetch(`${host}/api/note/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjNWYzYzQ0ZTI2ODg3MDA5ODRhNjgyIn0sImlhdCI6MTY3NDAwMTk0Nn0.ELOv6xxgFuLF3TlRSJ27Vjmld1UFyjBIpWWNYy4L1t4'
      },
    });
    const json = response.json();
    console.log("Deleting the note with id " + id)
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
  }

  //Edit Notes̀
  const editNotes = async (id, title, description, tag) => {
    //API CALL for edit notes

    const response = await fetch(`${host}/api/note/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjNWYzYzQ0ZTI2ODg3MDA5ODRhNjgyIn0sImlhdCI6MTY3NDAwMTk0Nn0.ELOv6xxgFuLF3TlRSJ27Vjmld1UFyjBIpWWNYy4L1t4'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = response.json();
    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }

    }
  }

  return (
    <NoteContext.Provider value={{ notes, addNotes, deleteNotes, editNotes, getNotes }}>
      {props.children}
    </NoteContext.Provider>

  )
}
export default NoteState;