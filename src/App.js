// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';  
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';  
import Header from './components/Header';  
import Home from './pages/Home';  
import About from './pages/About';  
import Contact from './pages/Contact';  

function App() {
  return (
    <Router>
    <Header />
    <div className="container mt-4">
      <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
