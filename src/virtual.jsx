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
        <div className="virtualsec">
                    <div className="referr">Virtual Numbers</div>

                <div className="vir">
                    <input type="text" placeholder="Search by number or country"/>

                    <div className="vir1">
                        <div className="vir2">
                        <div className="icon4"><img className="icon2" src={globe} alt="" /></div>
                        <div className="countries">All Countries</div>
                        </div>
                        <select className="icon11" name="" id=""></select>
                        {/* <a className="icon7" href=""><img className="icon2" src={downArrow} alt="" /></a> */}
                    </div>
                </div>

                    {/* <div className="totalsms1">
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
                        <div className="virnum">+1 (234) 567-8901</div>
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
                        <div className="virnum">+44 7700 900123</div>
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
                        <div className="virnum">+49 151 23456789</div>
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
                        <div className="virnum">+33 6 12 34 56 78</div>
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
                        <div className="virnum">+81 80 1234 5678</div>
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
                        <div className="virnum">+81 4 1234 5678</div>
                    </div>

                    <div className="smsC">
                        <div className="naira">#2,900</div>
                        <div className="now"><a className="now1" href="">Buy now</a></div>
                    </div>
                    </div>
                    </div>

                    <div className="now4"><a className="now5" href="">
                    <div className="">Load more</div>
                    <div className="icon15"><svg className="icon14 col" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" stroke="#fff"/></svg></div>
                    </a></div> */}

                    <div className="virtual">
                        <div className="virtual1">
                        <div>Your Balance</div>
                        <div>#200,000</div>
                        </div>

                        <div>
                            <div className="purchase">
                                <label>Purchase Number</label>
                                <input type="number" placeholder="0" />
                            </div>
                        </div>
                    </div>

                    <div className="view1">
                        <div>Recent activities</div>

                        <div>See more</div>
                    </div>

                    <div>
                        <div>
                            <div>Whatsapp</div>
                            <div></div>
                        </div>
                        <div></div>
                    </div>
        </div>
    )
}

export default Virtual;