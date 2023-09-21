import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import {Routes, Route} from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Details from "./pages/Details/Details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<HomePage/>}/>
        <Route path={"/card/:id"} element={<Details/>}/>
        <Route path={"*"} element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
