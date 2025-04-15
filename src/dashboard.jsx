import React from "react";
import './contact.css';
import refer from './img/refer.png';
import wallet from './img/wallet.png';
import help from './img/help.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@fortawesome/fontawesome-free-solid";
import { faHouse, faPhone, faShareNodes } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () =>{

    return(
        <div>
        <div className="totaldash">
             <div className='dashboard'>
                            <div className='dash'>
                                <div>Dashboard</div>
                            </div>
            
                            <div className='line1'></div>
                            <ul className='list'>
                                <li><a className="list1" href="">
                                    <div className='icon4'><FontAwesomeIcon className='icon2' icon={faHouse} /></div>
                                    <div>Overview</div></a>
                                    </li>
            
                                <li><a className="list1" href="">
                                    <div className='icon4'><a href=""></a><FontAwesomeIcon className='icon2' icon={faPhone} /></div>
                                    <div>Virtual Numbers</div></a>
                                    </li>
            
                                <li><a className='list3' href="">
                                    <div><svg className='icon2' width="28" height="17" viewBox="0 0 32 32" fill="none">
            <path d="M28 20C28 20.7072 27.719 21.3855 27.219 21.8856C26.7189 22.3857 26.0406 22.6667 25.3333 22.6667H9.33333L4 28V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V20Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></div>
                                    <div>Messages</div></a>
                                    </li>
                                <li><a className='list1' href="">
                                    <div className='icon4'><img className='icon2' src={refer} alt='' /></div>
                                    <div>Referrals</div></a>
                                    </li>
            
                                <li><a className='list1' href="">
                                    <div className='icon4'><img className='icon2' src={wallet} alt='' /></div>
                                    <div>Earnings</div></a>
                                    </li>
                            </ul>
            
                            <div className='line2'></div>
            
                            <div><a className='support' href="">
                                <div className='icon4'><img className='icon2' src={help} alt='' /></div>
                                <div className='support1'>Help & Support</div>
                                </a></div>
            
                            <div className='line3'></div>
            
                            <div className='profile'>
                                <div className='jd'>JD</div>
            
                                <div className='john'>
                                    <div className='john1'>John Doe</div>
                                    <div><a className='john2' href="View profile"></a>View Profile</div>
                                </div>
                            </div>
                            
                        </div>
        </div>
        </div>
    )
}

export default Dashboard;