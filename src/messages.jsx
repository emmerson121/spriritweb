import React from "react";
import './contact.css';
import Dashboard from "./dashboard";
import usa from './img/usa.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@fortawesome/fontawesome-free-solid";
import { faArrowLeft, faArrowsRotate } from '@fortawesome/free-solid-svg-icons'

const Messages = () =>{

    return(
        <div className="">
            <div className="totaldash">
            <Dashboard />

            <div className="mainmessage">
                <div className="messSection">
                    <div className="messageIcon">
                    <div className="icon4"><a href=""><FontAwesomeIcon className="icon2" icon={faArrowLeft} /></a></div>
                    <div className="mess">SMS Messages</div>
                    </div>

                    <div className=""><a className="messageIcon1" href="">
                        <div className="icon4"><FontAwesomeIcon className="icon2" icon={faArrowsRotate} /></div>
                        <div className="refresh">Refresh</div>
                        </a></div>
                </div>

                <div className='tableC'>

                    <div className='table6'>
                        <div className="usa">
                            <div className="icon4"><img className="icon2" src={usa} alt="" /></div>

                            <div>
                                <div className="usanum">+1 (234) 567-8901</div>
                               <div className="america">United States</div>
                            </div>
                        </div>
                    </div>

                    <div className='table7'>
                    <div className="usa1">
                            <div className="foreign">
                                <div className="foreign1">+1 897-654-3210</div>
                               <div className="foreign2">Your verification code is: 123456</div>
                            </div>

                            <div className="calendar">15/10/2023, 15:32:00</div>
                        </div>
                    </div>

                    <div className='table7'>
                    <div className="usa1">
                            <div className="foreign">
                                <div className="foreign1">+1 555-123-4567</div>
                               <div className="foreign2">Welcome to our service! Your account has been activated</div>
                            </div>

                            <div className="calendar">15/10/2023, 14:45:00</div>
                        </div> 
                    </div>

                    <div className='table8'>
                    <div className="sms">About SMS Messages</div>
                        <div className="calendar1">Messages received on this number will automatically appear here. Refresh this page preiodically to check for new messages.</div>
                        <div className="calendar1">Messages are stored for the duration of your number rental period.</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Messages;