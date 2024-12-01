import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import DictionaryPage from './components/DictionaryPage';
import NewProjPage from './components/NewProj';
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true)
 return (
  <Router>
  <div className="fixed">
    <Sidebar open={isOpen} setOpen={setIsOpen}/>
  </div>
  <div className="mb-40">
    <main className={`transition-all duration-300 ${isOpen ? "ml-72" : "ml-20"}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/newproj" element={<NewProjPage />} />
        </Routes>
    </main>
  </div>
  </Router>
 )
}

export default App
