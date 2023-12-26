import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import {  Routes, Route } from "react-router-dom";
import SavedData from './Component/SavedData';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/SavedData" element={<SavedData/>} />

  
      </Routes>
    </div>
  );
}

export default App;
