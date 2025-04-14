import React from 'react';
import './contact.css';
import refer from './img/refer.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@fortawesome/fontawesome-free-solid";
import { faHouse, faPhone } from '@fortawesome/free-solid-svg-icons'

const Referrals = () =>{

    return(
        <div>
            <div className='totaldash'>
            <div className='dashboard'>
                <div className='dash'>
                    <div>Dashboard</div>
                </div>

                <div className='line1'></div>
                <ul className='list'>
                    <li className='list1'>
                        <div className='icon4'><FontAwesomeIcon className='icon2' icon={faHouse} /></div>
                        <div>Overview</div>
                        </li>

                    <li className='list1'>
                        <div className='icon4'><FontAwesomeIcon className='icon2' icon={faPhone} /></div>
                        <div>Virtual Numbers</div>
                        </li>

                    <li className='list1'>
                        <div className='icon5'><svg className='iocn2' width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M28 20C28 20.7072 27.719 21.3855 27.219 21.8856C26.7189 22.3857 26.0406 22.6667 25.3333 22.6667H9.33333L4 28V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V20Z" stroke="#008EA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
                        <div>Messages</div>
                        </li>
                    <li className='list1'>
                        <div className='icon4'><img className='icon2' src={refer} alt='' /></div>
                        <div>Referrals</div>
                        </li>
                    <li className='list1'>Earnings</li>
                </ul>

                <div className='line2'></div>

                <div>Help & Support</div>
            </div>

            <div className='refer'>
                <div>Referrals</div>

                <div className='border1'>
                    <div>Your Referral Code</div>
                    <div>
                        <div>SPIRITHQ-JD-2232</div>
                        <div>
                            <div><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_713_2677)">
<path d="M14.1146 5.33301H7.44796C6.71158 5.33301 6.11462 5.92996 6.11462 6.66634V13.333C6.11462 14.0694 6.71158 14.6663 7.44796 14.6663H14.1146C14.851 14.6663 15.448 14.0694 15.448 13.333V6.66634C15.448 5.92996 14.851 5.33301 14.1146 5.33301Z" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.44796 10.6663C2.71462 10.6663 2.11462 10.0663 2.11462 9.33301V2.66634C2.11462 1.93301 2.71462 1.33301 3.44796 1.33301H10.1146C10.848 1.33301 11.448 1.93301 11.448 2.66634" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_713_2677">
<rect width="16" height="16" fill="white" transform="translate(0.78125)"/>
</clipPath>
</defs>
</svg>
</div>
                            <div>
                            <div><svg width="8" height="5" viewBox="0 0 8 5" fill="none">
<path d="M6.0546 1.33984L1.50793 3.99318" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
                            <div>Share</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <div>Your Referrals</div>
                        <div>12</div>
                    </div>

                    <div>
                        <div>Your Referrals</div>
                        <div>12</div>
                    </div>

                    <div>
                        <div>Your Referrals</div>
                        <div>12</div>
                    </div>

                    <div>
                        <div>Your Referrals</div>
                        <div>12</div>
                    </div>

                    <div>Help & Support</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Referrals;