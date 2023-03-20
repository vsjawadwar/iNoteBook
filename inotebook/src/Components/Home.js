import React from 'react'
// import AddNotes from './AddNotes';

import Notes from './Notes';
export default function Home(props) {
  const {showAlert}=props;
  return (
    <>
{/* <AddNotes/> */}
<Notes showAlert={showAlert}/>
    </>
  )
}
