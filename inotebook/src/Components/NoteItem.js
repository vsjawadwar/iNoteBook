import React from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';
export default function NoteItem(props) {
  const context=useContext(noteContext);
  const {deleteNotes}=context;
    const {note,updateNotes}=props;
  return (
    <div className="col-md-3 my-3">
      <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNotes(note._id)}}></i>
    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNotes(note)}}></i>
    {/* Delete and edit icons added from Font-Awesome and set curson pointer from global css file */}
  </div>
</div>
    </div>
  )
}
