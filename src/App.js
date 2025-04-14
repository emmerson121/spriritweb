import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import Vendor from './vendor';
import Referrals from './referrals';
import Info from './info';
import Contact from './contact';
import Business from './business';

function App() {
  return (
    <BrowserRouter>
    <Referrals />
    <Info />
    <Contact />
    <Business />
    {/* <Vendor /> */}
    <Routes>
      {/* <Route path='/contact' element={<Contact />} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
