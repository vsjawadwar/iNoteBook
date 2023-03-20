import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
// import NoteState from './context/notes/NoteState';
// import NoteContext from './context/notes/NoteContext';
// import NoteContext from './context/notes/NoteContext';
import NoteState from './context/notes/NoteState';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { useState } from 'react';
import Alert from './Components/Alert';
function App() {
  const [alert,setAlert]=useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <NoteState>
      <BrowserRouter>
      <Navbar/>
      <Alert alert={alert}/>
      <Routes>
        <Route exact path="/Home" element={<Home showAlert={showAlert}/>}></Route>
        <Route exact path="/About" element={<About/>}></Route>
        <Route exact path="/Login" element={<Login showAlert={showAlert}/>}></Route>
        <Route exact path="/Signup" element={<Signup showAlert={showAlert}/>}></Route>

        
      </Routes>
      </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
