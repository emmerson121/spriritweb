import React, { useState } from "react";
import './contact.css';
import home from './img/home.png';
import refer from './img/refer.png';
import wallet from './img/wallet.png';
import help from './img/help.png';
import phone from './img/phone.png';
import Overview from './overview';
import Virtual from './virtual';
import Messages from './messages';
import Referrals from './referrals';
import Earnings from './earnings';
import Help from "./help";
import Questions from "./questions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@fortawesome/fontawesome-free-solid";
import { faBars, faHouse, faPhone, faShareNodes, faXmark } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () =>{
    const [section, setSection] = useState(<Overview />);
    const [toggle, setToggle] = useState(true);
    const [bg, setBg] = useState('');
    const [show, setShow] = useState(true);
    const [popSupport, setPopSupport] = useState(true);
    
    const colorChange = () => {
        setSection(<Overview />)
        setBg('mcol1')
    }
    return(
        <div>
        <div className="totaldash">
        <div className="navBar">
                    {/* <div className="spirit">Spirit Media</div> */}
                    <div className="bar"><FontAwesomeIcon onClick={() => setToggle(!toggle)} className="famark" icon={faBars} /></div>
                </div>
             <div className='dashboard'>
                            <div className='dash'>
                                <div>Dashboard</div>
                            </div>
             
                            <div className='line1'></div>
                            <ul className='list'>
                                <li style={{backgroundColor: bg}} className="col mcol" onClick={colorChange}><div className="list1">
                                    <div className="icon12">< svg className="icon2 col"  viewBox="0 0 143 138" fill="none">
<path d="M53.625 126.5V69H89.375V126.5M17.875 51.75L71.5 11.5L125.125 51.75V115C125.125 118.05 123.869 120.975 121.635 123.132C119.4 125.288 116.369 126.5 113.208 126.5H29.7917C26.6312 126.5 23.6001 125.288 21.3653 123.132C19.1305 120.975 17.875 118.05 17.875 115V51.75Z" stroke="#000" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
                                    <div className="dash1">Overview</div></div>
                                    </li>
            
                                <li className="col mcol" onClick={() => setSection(<Virtual />)}><div className="list1">
                                <div><svg className="col" width="25" height="24" viewBox="0 0 25 24" fill="none">
<path d="M22.4999 16.9201V19.9201C22.5011 20.1986 22.444 20.4743 22.3324 20.7294C22.2209 20.9846 22.0572 21.2137 21.852 21.402C21.6468 21.5902 21.4045 21.7336 21.1407 21.8228C20.8769 21.912 20.5973 21.9452 20.3199 21.9201C17.2428 21.5857 14.2869 20.5342 11.6899 18.8501C9.27376 17.3148 7.22527 15.2663 5.68993 12.8501C3.99991 10.2413 2.94818 7.27109 2.61993 4.1801C2.59494 3.90356 2.62781 3.62486 2.71643 3.36172C2.80506 3.09859 2.9475 2.85679 3.1347 2.65172C3.32189 2.44665 3.54974 2.28281 3.80372 2.17062C4.05771 2.05843 4.33227 2.00036 4.60993 2.0001H7.60993C8.09524 1.99532 8.56572 2.16718 8.93369 2.48363C9.30166 2.80008 9.54201 3.23954 9.60993 3.7201C9.73656 4.68016 9.97138 5.62282 10.3099 6.5301C10.4445 6.88802 10.4736 7.27701 10.3938 7.65098C10.3141 8.02494 10.1288 8.36821 9.85993 8.6401L8.58993 9.9101C10.0135 12.4136 12.0864 14.4865 14.5899 15.9101L15.8599 14.6401C16.1318 14.3712 16.4751 14.1859 16.8491 14.1062C17.223 14.0264 17.612 14.0556 17.9699 14.1901C18.8772 14.5286 19.8199 14.7635 20.7799 14.8901C21.2657 14.9586 21.7093 15.2033 22.0265 15.5776C22.3436 15.9519 22.5121 16.4297 22.4999 16.9201Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
                                    <div className="dash1">Virtual Numbers</div></div>
                                    </li>
            
                                <li className="col mcol" onClick={() => setSection(<Messages />)}><div className='list3'>
                                    <div className="icon12"><svg className='icon2 col' width="28" height="17" viewBox="0 0 32 32" fill="none">
            <path d="M28 20C28 20.7072 27.719 21.3855 27.219 21.8856C26.7189 22.3857 26.0406 22.6667 25.3333 22.6667H9.33333L4 28V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V20Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></div>
                                    <div className="dash1">Messages</div></div>
                                    </li>
                                    
                                <li className="col mcol" onClick={() => setSection(<Referrals />)}><div className='list1'>
                                <div><svg className="col" width="25" height="24" viewBox="0 0 25 24" fill="none">
<path d="M16.25 21V19C16.25 17.9391 15.8286 16.9217 15.0784 16.1716C14.3283 15.4214 13.3109 15 12.25 15H6.25C5.18913 15 4.17172 15.4214 3.42157 16.1716C2.67143 16.9217 2.25 17.9391 2.25 19V21" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.25 11C11.4591 11 13.25 9.20914 13.25 7C13.25 4.79086 11.4591 3 9.25 3C7.04086 3 5.25 4.79086 5.25 7C5.25 9.20914 7.04086 11 9.25 11Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.25 20.9999V18.9999C22.2493 18.1136 21.9544 17.2527 21.4114 16.5522C20.8684 15.8517 20.1081 15.3515 19.25 15.1299" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.25 3.12988C17.1104 3.35018 17.873 3.85058 18.4176 4.55219C18.9622 5.2538 19.2578 6.11671 19.2578 7.00488C19.2578 7.89305 18.9622 8.75596 18.4176 9.45757C17.873 10.1592 17.1104 10.6596 16.25 10.8799" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
                                    {/* <div className='icon4'><img className='icon2 col' src={refer} alt='' /></div> */}
                                    <div className="dash1">Referrals</div></div>
                                    </li>
            
                                <li className="col mcol" onClick={() => setSection(<Earnings />)}><div className='list1'>
                                <div className=""><svg className="col" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M19 7V4C19 3.73478 18.8946 3.48043 18.7071 3.29289C18.5196 3.10536 18.2652 3 18 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5C3 5.53043 3.21071 6.03914 3.58579 6.41421C3.96086 6.78929 4.46957 7 5 7H20C20.2652 7 20.5196 7.10536 20.7071 7.29289C20.8946 7.48043 21 7.73478 21 8V12M21 12H18C17.4696 12 16.9609 12.2107 16.5858 12.5858C16.2107 12.9609 16 13.4696 16 14C16 14.5304 16.2107 15.0391 16.5858 15.4142C16.9609 15.7893 17.4696 16 18 16H21C21.2652 16 21.5196 15.8946 21.7071 15.7071C21.8946 15.5196 22 15.2652 22 15V13C22 12.7348 21.8946 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V16" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>

                                    {/* <div className='icon4'><img className='icon2' src={wallet} alt='' /></div> */}
                                    <div className="dash1">Earnings</div></div>
                                    </li>
                            </ul>
            
                            <div className='line2'></div>
            
                        <div className="list dash2 col2">
                            <div className="arr col  mcol" onClick={() => setShow(!show)}>
                            <div className="support">
                            <div className="icon17"><svg className="col" width="25" height="25" viewBox="0 0 48 48" fill="none">
<path d="M18.18 18C18.6502 16.6633 19.5783 15.5362 20.7999 14.8183C22.0215 14.1003 23.4578 13.8379 24.8544 14.0774C26.2509 14.317 27.5176 15.043 28.4302 16.1271C29.3427 17.2111 29.8421 18.583 29.84 20C29.84 24 23.84 26 23.84 26M24 34H24.02M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
                                <div className='dash3'>Help & Support</div>
                                </div> 
                            <div className="icon15">
                                {show ? <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                            </div>

                        {!show ?
                            <div className="itemsB">
                            <ul className="itemsA">
                                <li className="help1 col2" onClick={() => setSection(<Help />)}>Get in touch</li>
                                <li className="help1 col2" >Join community</li>
                                <li className="help1 col2" onClick={() => setSection(<Questions />)}>FAQs</li>

                                {/* <div className="dot2 col2" onClick={() => setSection(<Help />)}>
                                    <div className=""><svg className="dot col" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" stroke="#000"/></svg></div>
                                <div className="help1 col2" >Get in touch</div>
                                </div>

                                 <div className="dot2 col2" onClick={() => setSection(<Help />)}>
                                    <div className=""><svg className="dot col" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" stroke="#000"/></svg></div>
                                <div className="help1 col2" >Join community</div>
                                </div>

                                 <div className="dot2 col2" onClick={() => setSection(<Help />)}>
                                    <div className=""><svg className="dot col" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" stroke="#000"/></svg></div>
                                <div className="help1 col2" >FAQs</div>
                                </div> */}
                                
                            </ul>
                            </div>
                        : ''}
                            </div>
            
                            <div className='line3'></div>
            
                            <div className='profile'>
                                <div className='jd'>JD</div>
            
                                <div className='john'>
                                    <div className='john1'>John Doe</div>
                                    <div><a className='john2' href="View profile"></a>View Profile</div>
                                </div>
                            </div>
                        </div>
        {section}                
        </div>

        {!toggle ? 
        <div className="navbar">
        <div className="nav">
        <div className="xmark"><FontAwesomeIcon className="xmark" onClick={() => setToggle(true)} icon={faXmark} /></div>
        <ul className='list'>
                                <li className="col" onClick={() => setSection(<Overview />)}><div className="list1">
                                <div className="icon12">< svg className="icon2 col"  viewBox="0 0 143 138" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M53.625 126.5V69H89.375V126.5M17.875 51.75L71.5 11.5L125.125 51.75V115C125.125 118.05 123.869 120.975 121.635 123.132C119.4 125.288 116.369 126.5 113.208 126.5H29.7917C26.6312 126.5 23.6001 125.288 21.3653 123.132C19.1305 120.975 17.875 118.05 17.875 115V51.75Z" stroke="#000" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
                                    {/* <div className="icon4"><svg className="icon13 col" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" stroke="#008EA8" /></svg></div> */}
                                    {/* <div className='icon4'><img className='icon2' src={home} /></div> */}
                                    <div>Overview</div></div>
                                    </li>
            
                                <li className="col" onClick={() => setSection(<Virtual />)}><div className="list1">
                                <div><svg className="col" width="25" height="24" viewBox="0 0 25 24" fill="none">
<path d="M22.4999 16.9201V19.9201C22.5011 20.1986 22.444 20.4743 22.3324 20.7294C22.2209 20.9846 22.0572 21.2137 21.852 21.402C21.6468 21.5902 21.4045 21.7336 21.1407 21.8228C20.8769 21.912 20.5973 21.9452 20.3199 21.9201C17.2428 21.5857 14.2869 20.5342 11.6899 18.8501C9.27376 17.3148 7.22527 15.2663 5.68993 12.8501C3.99991 10.2413 2.94818 7.27109 2.61993 4.1801C2.59494 3.90356 2.62781 3.62486 2.71643 3.36172C2.80506 3.09859 2.9475 2.85679 3.1347 2.65172C3.32189 2.44665 3.54974 2.28281 3.80372 2.17062C4.05771 2.05843 4.33227 2.00036 4.60993 2.0001H7.60993C8.09524 1.99532 8.56572 2.16718 8.93369 2.48363C9.30166 2.80008 9.54201 3.23954 9.60993 3.7201C9.73656 4.68016 9.97138 5.62282 10.3099 6.5301C10.4445 6.88802 10.4736 7.27701 10.3938 7.65098C10.3141 8.02494 10.1288 8.36821 9.85993 8.6401L8.58993 9.9101C10.0135 12.4136 12.0864 14.4865 14.5899 15.9101L15.8599 14.6401C16.1318 14.3712 16.4751 14.1859 16.8491 14.1062C17.223 14.0264 17.612 14.0556 17.9699 14.1901C18.8772 14.5286 19.8199 14.7635 20.7799 14.8901C21.2657 14.9586 21.7093 15.2033 22.0265 15.5776C22.3436 15.9519 22.5121 16.4297 22.4999 16.9201Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
                                    {/* <div className='icon4'><img className='icon2' src={phone} /></div> */}
                                    <div>Virtual Numbers</div></div>
                                    </li>
            
                                <li className="col" onClick={() => setSection(<Messages />)}><div className='list3'>
                                    <div className="icon12"><svg className='icon2 col' width="28" height="17" viewBox="0 0 32 32" fill="none">
            <path d="M28 20C28 20.7072 27.719 21.3855 27.219 21.8856C26.7189 22.3857 26.0406 22.6667 25.3333 22.6667H9.33333L4 28V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V20Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></div>
                                    <div>Messages</div></div>
                                    </li>

                                <li className="col" onClick={() => setSection(<Referrals />)}><div className='list1'>
                                <div><svg className="col" width="25" height="24" viewBox="0 0 25 24" fill="none">
<path d="M16.25 21V19C16.25 17.9391 15.8286 16.9217 15.0784 16.1716C14.3283 15.4214 13.3109 15 12.25 15H6.25C5.18913 15 4.17172 15.4214 3.42157 16.1716C2.67143 16.9217 2.25 17.9391 2.25 19V21" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.25 11C11.4591 11 13.25 9.20914 13.25 7C13.25 4.79086 11.4591 3 9.25 3C7.04086 3 5.25 4.79086 5.25 7C5.25 9.20914 7.04086 11 9.25 11Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.25 20.9999V18.9999C22.2493 18.1136 21.9544 17.2527 21.4114 16.5522C20.8684 15.8517 20.1081 15.3515 19.25 15.1299" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.25 3.12988C17.1104 3.35018 17.873 3.85058 18.4176 4.55219C18.9622 5.2538 19.2578 6.11671 19.2578 7.00488C19.2578 7.89305 18.9622 8.75596 18.4176 9.45757C17.873 10.1592 17.1104 10.6596 16.25 10.8799" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
                                    {/* <div className='icon4'><img className='icon2 col' src={refer} alt='' /></div> */}
                                    <div>Referrals</div></div>
                                    </li>
            
                                <li className="col" onClick={() => setSection(<Earnings />)}><div className='list1'>
                                <div className=""><svg className="col" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M19 7V4C19 3.73478 18.8946 3.48043 18.7071 3.29289C18.5196 3.10536 18.2652 3 18 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5C3 5.53043 3.21071 6.03914 3.58579 6.41421C3.96086 6.78929 4.46957 7 5 7H20C20.2652 7 20.5196 7.10536 20.7071 7.29289C20.8946 7.48043 21 7.73478 21 8V12M21 12H18C17.4696 12 16.9609 12.2107 16.5858 12.5858C16.2107 12.9609 16 13.4696 16 14C16 14.5304 16.2107 15.0391 16.5858 15.4142C16.9609 15.7893 17.4696 16 18 16H21C21.2652 16 21.5196 15.8946 21.7071 15.7071C21.8946 15.5196 22 15.2652 22 15V13C22 12.7348 21.8946 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V16" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>

                                    {/* <div className='icon4'><img className='icon2' src={wallet} alt='' /></div> */}
                                    <div>Earnings</div></div>
                                    </li>
                           
                           <div className="list dash2 col2" style={{padding: '2px 0px'}}>
                            <div className="arr col  mcol3" onClick={() => setShow(!show)}>
                            <div className="support">
                            <div className="icon17"><svg className="col" width="25" height="25" viewBox="0 0 48 48" fill="none">
<path d="M18.18 18C18.6502 16.6633 19.5783 15.5362 20.7999 14.8183C22.0215 14.1003 23.4578 13.8379 24.8544 14.0774C26.2509 14.317 27.5176 15.043 28.4302 16.1271C29.3427 17.2111 29.8421 18.583 29.84 20C29.84 24 23.84 26 23.84 26M24 34H24.02M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
                                <div className='dash3'>Help & Support</div>
                                </div> 
                            <div className="icon15">
                                {show ? <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                            </div>

                        {!show ?
                            <div className="itemsB">
                            <ul className="itemsA">
                                <li className="help1 col2" onClick={() => setSection(<Help />)}>Get in touch</li>
                                <li className="help1 col2" >Join community</li>
                                <li className="help1 col2" onClick={() => setSection(<Questions />)}>FAQs</li>
                            </ul>
                            </div>
                        : ''}
                            </div>

                            {/* <div className="list">
                            <div className="col support2" onClick={() => setSection()}>
                            <div className="icon17"><svg className="col" width="48" height="48" viewBox="0 0 48 48" fill="none">
<path d="M18.18 18C18.6502 16.6633 19.5783 15.5362 20.7999 14.8183C22.0215 14.1003 23.4578 13.8379 24.8544 14.0774C26.2509 14.317 27.5176 15.043 28.4302 16.1271C29.3427 17.2111 29.8421 18.583 29.84 20C29.84 24 23.84 26 23.84 26M24 34H24.02M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
                                <div className='sup'>Help & Support</div>
                                <div className="icon15">
                                {show ? <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                            </div>

                            {!show ?
                            <div className="itemsB">
                            <ul className="itemsA">
                                <li className="help1 col2" onClick={() => setSection(<Help />)}>Get in touch</li>
                                <li className="help1 col2">Join community</li>
                                <li className="help1 col2" onClick={() => setSection(<Questions />)}>FAQs</li>                            </ul>
                            </div>
                        : ''}
                            </div> */}

                             </ul>
                            
        </div>
        </div>
        : '' }

        <div className='mainsupport'>
             <div className="support4" onClick={()=> setPopSupport(!popSupport)}>
              <svg className="support5" width="48" height="48" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z" fill='#fff'/></svg>
            
        
            {!popSupport ? 
            <div className='supportItems1'>
            <ul className='supportItems'>
              <div className='help3' onClick={() => setSection(<Help />)}>Get in touch</div>
              <div className='help3' onClick={() => setSection(<Help />)}>Join community</div>
              <div className='help3' onClick={() => setSection(<Questions />)}>FAQs</div>
              </ul>
              </div>
              
              : ''}
              </div>
            </div>
        </div>
    )
}



export default Dashboard;