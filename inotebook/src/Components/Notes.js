import React, { useContext, useEffect,useRef, useState} from 'react'
import noteContext from '../context/notes/NoteContext';
import AddNotes from './AddNotes';
import NoteItem from './NoteItem';

export default function Notes(props) {
  const context = useContext(noteContext);
  const { notes, getNotes ,editNotes} = context;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);
  const ref=useRef(null);
  const refClose=useRef(null);
  const [note,setNote]=useState({id:"",etitle:"",edescription:"",etag:"default"});
  const updateNotes = (currentNote) => {
    console.log("Modal Clicked");
    ref.current.click();
    setNote({id: currentNote._id,etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
    
  };
 const handleClick=(e)=>{
  e.preventDefault();
  editNotes(note.id,note.etitle,note.edescription,note.etag);
  refClose.current.click(); 
  // Programatically we are clicking on close button as soon as updation done
  console.log("Updating the note",note);
  props.showAlert("Updated Successfully","success");
 }
  const onChange=(e)=>{
        
    setNote({...note,[e.target.name]:e.target.value});
};
  return (
    <>
    <div className="container">
      <AddNotes showAlert={props.showAlert}/>
      
      
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
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" disabled={note.etitle.length < 5 ||note.edescription.length < 5 || note.etag.length < 5}onClick={handleClick}>Update Note</button>
      </div>
    </div>
  </div>
</div>      
      <div className="row my-3 mx-2">
        <div className="container">
          {notes.length===0 && 'No notes to display'}
        </div>
        {notes.map((note) => {
          return <NoteItem key={note._id} updateNotes={updateNotes} note={note} showAlert={props.showAlert} />
        })}
      </div>
    </div>
    </>
  )
}
