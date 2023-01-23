import React, {useContext} from 'react'
import NoteContext from '../context/notes/NoteContext'
export default function About() {
  const a =useContext(NoteContext);
  return (
    <div>
      <h1>About {a.Name}</h1>
    </div>
  )
}
