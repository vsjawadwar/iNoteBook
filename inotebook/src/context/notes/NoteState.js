// import React from "react"; //Even if we don't import react then also fine.
import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState=(props)=>{
   const notesInitial=[
    {
      "_id": "63c8fc6cd5c654b2f527a932",
      "user": "63c5f3c44e2688700984a682",
      "title": "myTitle",
      "description": "my new data 1 added successfully",
      "tag": "personal",
      "date": "2023-01-19T08:16:44.747Z",
      "__v": 0
    },
    {
      "_id": "63cc7c41cf926db85cdf5f0d",
      "user": "63c5f3c44e2688700984a682",
      "title": "myTitle2",
      "description": "my new data 2 added successfully",
      "tag": "personal",
      "date": "2023-01-21T23:58:57.661Z",
      "__v": 0
    },
    {
      "_id": "63d1a9c240d1e0dd460fdfff",
      "user": "63c5f3c44e2688700984a682",
      "title": "myTitle2",
      "description": "my new data 2 added successfully",
      "tag": "personal",
      "date": "2023-01-25T22:14:26.574Z",
      "__v": 0
    },
    {
      "_id": "63d1a9c840d1e0dd460fe001",
      "user": "63c5f3c44e2688700984a682",
      "title": "myTitle3",
      "description": "my new data 2 added successfully",
      "tag": "personal",
      "date": "2023-01-25T22:14:32.544Z",
      "__v": 0
    },
    {
      "_id": "63d1a9cf40d1e0dd460fe003",
      "user": "63c5f3c44e2688700984a682",
      "title": "myTitle33",
      "description": "my new data 2 added successfully",
      "tag": "personal",
      "date": "2023-01-25T22:14:39.599Z",
      "__v": 0
    }
  ]; 
  const [notes,setNotes]=useState(notesInitial);

  //Add Notes
  const addNotes=(title,description,tag)=>{
    //Todo API Call 
    console.log("Adding a new Note");
    const note={
      "_id": "63d1a9cf40d1e0dd460fe003",
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
  const deleteNotes=(id)=>{
    console.log("Deleting the note with id "+id)
    const newNotes=notes.filter((note)=>{return note._id!==id});
    setNotes(newNotes);
  }

  //Edit Notes
const editNotes=()=>{

  }

    return(
        <NoteContext.Provider value={{notes,addNotes,deleteNotes,editNotes}}>
            {props.children}
        </NoteContext.Provider>

    )
}
export default NoteState;