import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import Vendor from './vendor';
import Admin from './adDashboard';
import Dashboard from './dashboard';

function App() {

  return (
    <BrowserRouter> 
    <div className=''>
      {/* <Dashboard /> */}
      {/* <Refer /> */}
      <Admin />
      {/* <ManageMovie /> */}
      {/* {section} */}
    {/* {section === 'Overview' ? <Overview /> : section === "Virtual" ? <Virtual /> : section === 'Messages' ? <Messages /> : section === 'Referrals' ? <Referrals /> : section === 'Earnings' ? <Earnings /> : <Overview /> } */}
    </div>
    {/* <Overview /> <br />
    <Virtual /> <br />
    <Messages /> <br />
    <Referrals /> <br />
    <Earnings /> */}
    {/* <Info /> */}
    {/* <Contact /> */}
    {/* <Business /> */}
    {/* <Vendor /> */}
    <Routes>
      
      {/* <Route path='/internationalpage' element={<Page2 />} /> */}
      {/* <Route path='/info' element={<Info />} /> */}
    </Routes>
    
    {/* <div className='mainsupport'>
     <div className="support4" onClick={()=> setPopSupport(!popSupport)}>
      <svg className="support5" width="48" height="48" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z" fill='#fff'/></svg>
    

    {!popSupport ? 
    <div className='supportItems1'>
    <ul className='supportItems'>
      <div className='help3' onClick={() => setSection(<Help />)}>Get in touch</div>
      <div className='help3' onClick={() => setSection1(<Help />)}>Join community</div>
      <div className='help3' onClick={() => setSection1(<Questions />)}>FAQs</div>
      </ul>
      </div>
      
      : ''}
      </div>
    </div> */}
    
    </BrowserRouter>
  );
}

export default App;
