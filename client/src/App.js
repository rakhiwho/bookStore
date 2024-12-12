import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Book from './components/book/book';
import ALLBOOKS from "./components/get/bookGet";
function App() {
  return (
    <div className="App">
       
       <Router>
          <Routes>
            <Route path="/" element={<Book />} />
            <Route path="/get" element={< ALLBOOKS/>} />
          </Routes>
        </Router>
 
    </div>
  );
}

export default App;
