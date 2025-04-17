import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import Vendor from './vendor';
import Virtual from './virtual';
import Messages from './messages';
import Referrals from './referrals';
import Earnings from './earnings';
import Info from './info';
import Contact from './contact';
import Business from './business';

function App() {
  return (
    <BrowserRouter> 
    <Virtual /> <br />
    <Messages /> <br />
    <Referrals /> <br />
    <Earnings />
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
