// import React from "react"; //Even if we don't import react then also fine.
import NoteContext from "./NoteContext";
const NoteState=(props)=>{
    const state={
        "Name":"Vishal",
        "Class":"5B"
    }
    return(
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>

    )
}
export default NoteState;