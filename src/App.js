import logo from './logo.svg';
import './App.css';
import Addbook from './components/Addbook';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Booksearch from './components/Booksearch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewbook from './components/Viewbook';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Addbook/>}/>
      <Route path='/search' exact element={<Booksearch/>}/>
      <Route path='/viewbook' exact element={<Viewbook/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
