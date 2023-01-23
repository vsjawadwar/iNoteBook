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
function App() {
  return (
    <>
    <NoteState>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/Home" element={<Home/>}></Route>
        <Route exact path="/About" element={<About/>}></Route>
        
      </Routes>
      </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
