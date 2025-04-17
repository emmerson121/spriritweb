import React from "react";
import './contact.css';
import Dashboard from "./dashboard";
import usa from './img/usa.png'
import phone from './img/phone.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@fortawesome/fontawesome-free-solid";
// import { faHouse, faPhone, faShareNodes } from '@fortawesome/free-solid-svg-icons'

const Virtual = () =>{

    return(
        <div>
            <div className="totaldash">
                <Dashboard />

                <div>
                    <div className="referr">Virtual Numbers</div>

                <div>
                    <input type="text" placeholder="Search by number or country"/>

                    <div>
                        <div></div>
                        <div>All Countries</div>
                        <div></div>
                    </div>
                </div>

                    <div className="totalsms">
                    <div className="smsA">
                            <div className="icon4"><img className="icon2" src={usa} alt="" /></div>

                            <div>
                                <div className="sms1">United States</div>
                               <div className="sms2">SMS</div>
                            </div>
                        </div>

                    <div className="smsB">
                         <div className='icon4'><img className='icon2' src={phone} /></div>
                        <div>+1 (234) 567-8901</div>
                    </div>

                    <div className="smsC">
                        <div className="naira">#2,500</div>
                        <div className="now">Buy Now</div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Virtual;