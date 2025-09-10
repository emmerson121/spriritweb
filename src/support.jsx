import React from "react";
import './contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Support = () =>{

    return(
        <div className="supportMessage">
            <div className="messageDetail">
                <div className="image2"><svg className='img1 col' width="28" height="17" viewBox="0 0 32 32" fill="none">
            <path d="M28 20C28 20.7072 27.719 21.3855 27.219 21.8856C26.7189 22.3857 26.0406 22.6667 25.3333 22.6667H9.33333L4 28V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V20Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></div>
                <div className="header1">Message and Support</div>
            </div>

            <div className="incomingImg">
                <div className="header1">Incoming Messages</div>
            

            <div className="supportBorder">
                <div className="user">User: <span>johndoe@example.com</span></div>
                <div className="user1">I am not able to buy data. Please help</div>
            </div>

            <div className='supportBorder'>
                <div className="user">User: <span>janedoe@example.com</span></div>
                <div className="user1">How do I top up airtime again?</div>
            </div>
            </div>

            <div className="incomingImg2">
                <div className="header1">Reply to Message</div>

                <form action="">
                    <div className="userMail">
                        <input type="text" placeholder="User Email" />
                    </div>

                    <textarea name="text" id="" className="textsms">
                        Type your response...
                    </textarea>

                    <div className="sendButton">
                        <div className="sendButton1">
                        <div className="image3"><svg className="img1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M568.4 37.7C578.2 34.2 589 36.7 596.4 44C603.8 51.3 606.2 62.2 602.7 72L424.7 568.9C419.7 582.8 406.6 592 391.9 592C377.7 592 364.9 583.4 359.6 570.3L295.4 412.3C290.9 401.3 292.9 388.7 300.6 379.7L395.1 267.3C400.2 261.2 399.8 252.3 394.2 246.7C388.6 241.1 379.6 240.7 373.6 245.8L261.2 340.1C252.1 347.7 239.6 349.7 228.6 345.3L70.1 280.8C57 275.5 48.4 262.7 48.4 248.5C48.4 233.8 57.6 220.7 71.5 215.7L568.4 37.7z" fill="none" stroke="#fff" strokeWidth='40'/></svg></div>
                        <div className="reply">Send Reply</div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Support;