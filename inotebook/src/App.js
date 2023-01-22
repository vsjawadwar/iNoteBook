import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/Home" element={<Home/>}></Route>
        <Route exact path="/About" element={<About/>}></Route>
        
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
