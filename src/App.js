import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AddPosts from './Components/AddPosts';
import Footer from './Components/Footer';


// import { BrowserRouter as Router ,Route ,Switch  } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-posts" element={<AddPosts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
