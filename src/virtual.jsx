import React from "react";
import './contact.css';
import Dashboard from "./dashboard";
import downArrow from './img/downArrow.png'
import globe from './img/globe.png';
import usa from './img/usa.png';
import phone from './img/phone.png';
import uk from './img/uk.png'
import germany from './img/germany.png';
import france from './img/france.png';
import japan from './img/japan.png';
import australia from './img/australia.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@fortawesome/fontawesome-free-solid";
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const Virtual = () =>{

    return(
        <div>
            <div className="totaldash">
                <Dashboard />

                <div className="virtualsec">
                    <div className="referr">Virtual Numbers</div>

                <div className="vir">
                    <input type="text" placeholder="Search by number or country"/>

                    <div className="vir1">
                        <div className="vir2">
                        <div className="icon4"><img className="icon2" src={globe} alt="" /></div>
                        <div className="countries">All Countries</div>
                        </div>
                        <div className="icon7"><img className="icon2" src={downArrow} alt="" /></div>
                    </div>
                </div>

                    <div className="totalsms1">
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
                        <div className="now"><a className="now1" href="">Buy now</a></div>
                    </div>
                    </div>

                    <div className="totalsms">
                    <div className="smsA">
                            <div className="icon4"><img className="icon2" src={uk} alt="" /></div>

                            <div>
                                <div className="sms1">United Kingdom</div>
                               <div className="sms2">SMS</div>
                            </div>
                        </div>

                    <div className="smsB">
                         <div className='icon4'><img className='icon2' src={phone} /></div>
                        <div>+44 7700 900123</div>
                    </div>

                    <div className="smsC">
                        <div className="naira">#3,000</div>
                        <div className="now"><a className="now1" href="">Buy now</a></div>
                    </div>
                    </div>

                    <div className="totalsms">
                    <div className="smsA">
                            <div className="icon4"><img className="icon2" src={germany} alt="" /></div>

                            <div>
                                <div className="sms1">Germany</div>
                               <div className="sms2">SMS</div>
                            </div>
                        </div>

                    <div className="smsB">
                         <div className='icon4'><img className='icon2' src={phone} /></div>
                        <div>+49 151 23456789</div>
                    </div>

                    <div className="smsC">
                        <div className="naira">#2,800</div>
                        <div className="now"><a className="now1" href="">Buy now</a></div>
                    </div>
                    </div>

                    <div className="totalsms">
                    <div className="smsA">
                            <div className="icon4"><img className="icon2" src={france} alt="" /></div>

                            <div>
                                <div className="sms1">France</div>
                               <div className="sms2">SMS</div>
                            </div>
                        </div>

                    <div className="smsB">
                         <div className='icon4'><img className='icon2' src={phone} /></div>
                        <div>+33 6 12 34 56 78</div>
                    </div>

                    <div className="smsC">
                        <div className="naira">#2,700</div>
                        <div className="now"><a className="now1" href="">Buy now</a></div>
                    </div>
                    </div>

                    <div className="totalsms">
                    <div className="smsA">
                            <div className="icon4"><img className="icon2" src={japan} alt="" /></div>

                            <div>
                                <div className="sms1">Japan</div>
                               <div className="sms2">SMS</div>
                            </div>
                        </div>

                    <div className="smsB">
                         <div className='icon4'><img className='icon2' src={phone} /></div>
                        <div>+81 80 1234 5678</div>
                    </div>

                    <div className="smsC">
                        <div className="naira">#3,200</div>
                        <div className="now"><a className="now1" href="">Buy now</a></div>
                    </div>
                    </div>

                    <div className="totalsms">
                    <div className="smsA">
                            <div className="icon4"><img className="icon2" src={australia} alt="" /></div>

                            <div>
                                <div className="sms1">Australia</div>
                               <div className="sms2">SMS</div>
                            </div>
                        </div>

                    <div className="smsB">
                         <div className='icon4'><img className='icon2' src={phone} /></div>
                        <div>+81 4 1234 5678</div>
                    </div>

                    <div className="smsC">
                        <div className="naira">#2,900</div>
                        <div className="now"><a className="now1" href="">Buy now</a></div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Virtual;