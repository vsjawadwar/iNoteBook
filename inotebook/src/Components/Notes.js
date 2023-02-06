import React,{ useContext, useEffect } from 'react'
import noteContext from '../context/notes/NoteContext';
import AddNotes from './AddNotes';
import NoteItem from './NoteItem';

export default function Notes() {
   const context=useContext(noteContext);
   const {notes,getNotes} =context;
   useEffect(()=>{
    getNotes();
   },[]);
    return (
    <>
    <AddNotes/>
      <div className="row my-3">
      {notes.map((note)=>{
        return <NoteItem key={note._id}note={note}/>;
      })}
      </div>
    </>
  )
}
