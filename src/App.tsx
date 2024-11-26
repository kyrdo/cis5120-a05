import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import DictionaryPage from './components/DictionaryPage';
import NewProjPage from './components/NewProj';

function App() {
 return (
  <Router>
  <div className="flex">
    <Sidebar/>
    <main className="main">
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
