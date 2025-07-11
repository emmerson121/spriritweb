import React,{useState, useEffect, useMemo} from "react";
import axios from "axios";
import Select from 'react-select';
import countryList from 'react-select-country-list'
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
// import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const Virtual = () =>{
    const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), []);
  const [getApi, setGetApi] = useState([ ]);
  const [myApi, setMyApi] = useState([]);
  

  const changeHandler = value => {
    setValue(value)
  }

  useEffect(() =>{
         const apiUrl = 'https://api.smspool.net/service/retrieve_all';

     axios.get(apiUrl)
       .then(response => {
         // Handle the successful response
         setMyApi(response.data);
       })
       .catch(error => {
         // Handle errors
         console.error('Error:', error);
       });

    
  }, [])
    return(
        <div className="virtualsec">
                    <div className="referr">Virtual Numbers</div>

                {/* <div className="vir">
                    <input type="text" placeholder="Search by number or country"/>

                    <div className="vir1">
                        <div className="vir2">
                        <div className="icon4"><img className="icon2" src={globe} alt="" /></div>
                        <div className="countries">All Countries</div>
                        </div>
                        <div className="icon23"><svg className="col2" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></div>
                    </div>
                </div> */}

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
                        <div className="virtual3">
                        <div className="virtual1">
                        <div className="bal">Your balance</div>
                        <div className="bal1">#200,000.00</div>
                        </div>

                        <div className="virtual4">
                        <div className="virtual8">
                        <div className="icon20"><svg className="virtual5" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" fill="#008EA8"/></svg></div>
                        </div>
                        <div className="add">Add funds</div>
                        </div>
                        </div>

                        <div className="mainpurchase">
                            <div className="purchased">
                                <label className="purchased1">Purchased Number</label>
                                <div><input type="number" placeholder="0" /></div>
                            </div>

                            <div className="virtual6">
                            <div className="icon20"><svg className="virtual5" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" fill="#008EA8"/></svg></div>
                            </div>
                            </div>

                            {/* <div className="mainpurchase">
                            <div className="purchased">
                                <label className="purchased1">Rented Numbers</label>
                                <input type="number" placeholder="0" />
                            </div>

                            <div className="virtual6">
                            <div className="icon20"><svg className="virtual5" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" fill="#008EA8"/></svg></div>
                            </div>
                            </div> */}
                        
                    </div>

                    <div className="virtual">
                      <div className="serviceDiv">
                            <div className="service">
                                <div className="purchased2">Service provider</div>
                                <select className="selectDiv">
                                    <option className="selectDiv1" value='Select service provider' selected>Select service provider...</option>
                                    <option className="selectDiv1">Swift Numbers</option>
                                    <option className="selectDiv1">Dynamic Numbers</option>
                                </select>
                            </div>
                            </div>  

                        
                         <div className="serviceDiv">
                            <div className="service">
                                <div className="purchased2">Services</div>
                                <select className="selectDiv" placeholder='Select service'>
                                    <option className="selectDiv1" value='Select service...' selected>Select service...</option>
                                    {myApi.map((app)=>(
                                        <div key={app.id.name}>
                                            <div onClick={app.click}>
                                    <option className="selectDiv1">{app.id.name}</option>
                                    </div>
                                    </div>
                                    ))}
                                    {/* <option className="selectDiv1" value='1Q'>1Q</option>
                                    <option className="selectDiv1" value='1StopMove'>1StopMove</option>
                                     <option className="selectDiv1" value='2dehands'>2dehands</option>
                                      <option className="selectDiv1" value='2game'>2game</option>
                                       <option className="selectDiv1" value='360NRS'>360NRS</option>
                                        <option className="selectDiv1" value='3Fun'>3Fun</option>
                                         <option className="selectDiv1" value='Smiles'>Smiles</option>
                                         <option className="selectDiv1" value='Mall'>7-Eleven</option>
                                          <option className="selectDiv1" value='Mall'>7Mall</option>
                                          <option className="selectDiv1" value='Mall'>888Poker</option>
                                          <option className="selectDiv1" value='Mall'>AARP Rewards</option>
                                          <option className="selectDiv1" value='Mall'>Ablo</option>
                                          <option className="selectDiv1" value='Mall'>Abra</option>
                                          <option className="selectDiv1" value='Mall'>AccountKit</option>
                                          <option className="selectDiv1" value='Mall'>Adidas</option>
                                          <option className="selectDiv1" value='Mall'>Ad It Up</option>
                                          <option className="selectDiv1" value='Mall'>ADlist24</option>
                                          <option className="selectDiv1" value='Mall'>Adobe</option> */}
                                </select>
                                </div>
                            </div>

                        <div className="serviceDiv">
                            <div className="service">
                                <div className="purchased2">Country</div>
                                <div className="selectDiv2">
                                    <Select options={options} value={value} onChange={changeHandler} /></div>
                            </div>
                            </div>

                            <div className="serviceDiv3">
                            <div className="service1">
                                <div className="purchased2">Price</div>
                                <div><input type="number" placeholder="#" /></div>
                            </div>

                            <div className="virtual9">
                        {/* <div className="virtual10">
                        <div className="icon20"><svg className="virtual5" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" fill="#008EA8"/></svg></div>
                        </div> */}
                        <div className="add1">Purchase</div>
                        </div>
                            

                            {/* <div className="virtual6">
                            <div className="icon20"><svg className="virtual5" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" fill="#008EA8"/></svg></div>
                            </div> */}
                            </div>
                        
                    </div>

                    {/* <div className="view1">
                        <div className="recent">Recent activities</div>

                        <div className="viewall">See more</div>
                    </div> */}

                    <div className="tableview">
                        <div className="recent2">Recent SMS orders</div>

                        <div className="tab1"></div>

                    <div className="tableview1">
                        <div className="tableview2">
                        <table className="maintab">
                            <thead className="tab3">
                                <tr className="tabA">
                                <th className="tab">Order ID</th>
                                <th className="tab">Number</th>
                                <th className="tab">Code</th>
                                <th className="tab">Country</th>
                                <th className="tab">Service</th>
                                <th className="tab">Provider</th>
                                <th className="tab">Amount</th>
                                <th className="tab">Status</th>
                                </tr>
                            </thead>

                            <tbody className="tab2">
                                <tr className="tab4">
                                    <td>
                                
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        </div>
                    </div>

                            
                    <div className="tabButton">
                            <div className="tabButton2">O of 0 row(s) selected.</div>

                            <div className="tabButton1">
                                <button className="tabBut1">Previous</button>
                                 <button className="tabBut2">Next</button>
                            </div>
                        </div>
                    

                    {/* <div className="tableD">
                        <div className='table9'>
                        <div className="maincontain">
                            <div className="contain">
                                <div className="virtual7">
                                <div className="icon21"><svg className='icon22' width="28" height="17" viewBox="0 0 32 32" fill="none">
            <path d="M28 20C28 20.7072 27.719 21.3855 27.219 21.8856C26.7189 22.3857 26.0406 22.6667 25.3333 22.6667H9.33333L4 28V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V20Z" stroke="#008EA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></div>
            </div>

                        <div>
                            <div className="whatsapp1">Whatsapp</div>
                            <div className="whatsapp2">Mar 3, 2025 - 12:19pm</div>
                        </div>
                            </div>

                            <div>
                                <div className="whatsapp3">#4,800</div>
                                <div className="dot1">
                                    <div className=""><svg className="dot" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" fill="yellow"/></svg></div>
                                    <div className="whatsapp2">Pending</div>
                                </div>
                            </div>
                        </div>

                                

                        </div>

                    <div className='table9'>
                        <div className="maincontain">
                            <div className="contain">
                                <div className="virtual7">
                                <div className="icon21"><svg className='icon22' width="28" height="17" viewBox="0 0 32 32" fill="none">
            <path d="M28 20C28 20.7072 27.719 21.3855 27.219 21.8856C26.7189 22.3857 26.0406 22.6667 25.3333 22.6667H9.33333L4 28V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V20Z" stroke="#008EA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></div>
            </div>

                        <div>
                            <div className="whatsapp1">3fun</div>
                            <div className="whatsapp2">Mar 3, 2025 - 12:08pm</div>
                        </div>
                            </div>

                            <div>
                                <div className="whatsapp3">#840</div>
                                <div className="dot1">
                                    <div className=""><svg className="dot" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" fill="green"/></svg></div>
                                    <div className="whatsapp2">Refunded</div>
                                </div>
                            </div>
                        </div>

                                

                              
                    </div>

                    <div className='table9'>
                        <div className="maincontain">
                            <div className="contain">
                                <div className="virtual7">
                                <div className="icon21"><svg className='icon22' width="28" height="17" viewBox="0 0 32 32" fill="none">
            <path d="M28 20C28 20.7072 27.719 21.3855 27.219 21.8856C26.7189 22.3857 26.0406 22.6667 25.3333 22.6667H9.33333L4 28V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V20Z" stroke="#008EA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></div>
            </div>

                        <div>
                            <div className="whatsapp1">Aol</div>
                            <div className="whatsapp2">Feb 19, 2025 - 23:01pm</div>
                        </div>
                            </div>

                            <div>
                                <div className="whatsapp3">#400</div>
                                <div className="dot1">
                                    <div className=""><svg className="dot" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" fill="green"/></svg></div>
                                    <div className="whatsapp2">Refunded</div>
                                </div>
                            </div>
                        </div>

                                

                              
                    </div>

                    <div className='table9'>
                        <div className="maincontain">
                            <div className="contain">
                                <div className="virtual7">
                                <div className="icon21"><svg className='icon22' width="28" height="17" viewBox="0 0 32 32" fill="none">
            <path d="M28 20C28 20.7072 27.719 21.3855 27.219 21.8856C26.7189 22.3857 26.0406 22.6667 25.3333 22.6667H9.33333L4 28V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V20Z" stroke="#008EA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></div>
            </div>

                        <div>
                            <div className="whatsapp1">Apple</div>
                            <div className="whatsapp2">Feb 9, 2025 - 12:00am</div>
                        </div>
                            </div>

                            <div>
                                <div className="whatsapp3">#400</div>
                                <div className="dot1">
                                    <div className=""><svg className="dot" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" fill="green"/></svg></div>
                                    <div className="whatsapp2">Refunded</div>
                                </div>
                            </div>
                        </div>

                                

                              
                    </div>
                        </div> */}


                        


                    </div>
    )
}

export default Virtual;