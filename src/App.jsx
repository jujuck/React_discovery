import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Detail from './components/Details';

function App() {
  return (
    <div className="App">
      <Header text="Ceci est mon 1er header" />
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route path="/leagues/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
