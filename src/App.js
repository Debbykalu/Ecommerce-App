import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import ItemsList from './ItemList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
  <Router>
    <div className="App">
        <Navbar onSearch={(term) => setSearchTerm(term)} />
        <Routes>
          <Route path="/" element={<ItemsList searchTerm={searchTerm} />} exact /> 
        </Routes>
    </div>
  </Router>
);
}

export default App;
