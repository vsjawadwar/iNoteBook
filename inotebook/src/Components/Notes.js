import React, { useContext, useEffect,useRef, useState} from 'react'
import noteContext from '../context/notes/NoteContext';
import AddNotes from './AddNotes';
import NoteItem from './NoteItem';

export default function Notes() {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);
  const ref=useRef(null);
  const [note,setNote]=useState({etitle:"",edescription:"",etag:"default"});
  const updateNotes = (currentNote) => {
    console.log("Modal Clicked");
    ref.current.click();
    setNote({etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
  };
 const handleClick=(e)=>{
  e.preventDefault();
  console.log("Updating the note",note);
 }
  const onChange=(e)=>{
        
    setNote({...note,[e.target.name]:e.target.value});
};
  return (
    <>
    <div className="container">
      <AddNotes />
      
      
<button ref={ref}type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>


<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  {/* tabIndex- I of the index is in capital letters */}
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Edit Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
        <form className='my-3' >
        <div className="mb-3">
    <label htmlFor="etitle" className="form-label">Title</label>
    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange}/>

  </div>
  <div className="mb-3">
    <label htmlFor="edescription" className="form-label">Description</label>
    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription}onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="etag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="etag" name="etag" value={note.etag}onChange={onChange}/>
  </div>
  
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
      </div>
    </div>
  </div>
</div>      
      <div className="row my-3">
        {notes.map((note) => {
          return <NoteItem key={note._id} updateNotes={updateNotes} note={note} />
        })}
      </div>
    </div>
    </>
  )
}
