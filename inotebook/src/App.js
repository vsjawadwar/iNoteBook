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
// import Alert from './Components/Alert';
function App() {
  return (
    <>
    <NoteState>
      <BrowserRouter>
      <Navbar/>
      {/* <Alert message="Hello"/> */}
      <Routes>
        <Route exact path="/Home" element={<Home/>}></Route>
        <Route exact path="/About" element={<About/>}></Route>
        <Route exact path="/Login" element={<Login/>}></Route>
        <Route exact path="/Signup" element={<Signup/>}></Route>

        
      </Routes>
      </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
