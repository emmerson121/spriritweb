import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Feedback from './feedback';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='feedback' element={<Feedback />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
