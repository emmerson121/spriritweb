import React from "react";
import './contact.css';
import './refer.css';
import Dashboard from "./dashboard";
import cash3 from './img/cash3.svg';
import stack from './img/stack.png';
import airtime1 from './img/airtime1.png';
import callcard from './img/callcard.svg';
import foreign from './img/foreign.webp';
import bill from './img/bill.png';
import pay from './img/pay.png';
import subscription from './img/subscription.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleDot } from "@fortawesome/free-solid-svg-icons/faCircleDot";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

const Refer = () =>{
    return(
      <div>
        <div className="spiritmedia1">
        <div className="segment1">
            <div className="spiritmedia">
            <div className="stack2">
             {/* <div className="stack1"><img className="stack" src={stack } /></div>    */}
            <div>Earn for Life with the Spirit Media Affiliate Program!</div>
            </div>

            <div className="stack3">
            <div>Ready to turn your network into a lifetime stream of income?
            At Spirit Media, we believe in rewarding the people who grow with us — not just once, 
            but forever. With our affiliate program, you earn commissions for life each time someone 
            buys through your unique referral link. Yes, for life — no limits, no gimmicks.</div>
            
             <div className="cash1">
                {/* <img className="cash" src={cash3} style={{color: 'rgba(14, 28, 60, 0.05)'}} /> */}
            </div>
            </div>
            </div>

        </div>

        <div className="work">
            <div className="sear">
            <div><svg className="sear2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></div>
            <h2 className="free">How It Works (No Complex Jargon, Just Real Cash)</h2>
            </div>
            <div className="verify">We're verified wholesalers for:</div>

        <div>
            <div className="division">
            <div className="part1">
            <div className="circle4">
            <div className="circle3"><img className="circle2" scr={airtime1} /></div>
            </div>
            <div className="services">Airtime & Data</div>
            </div>

            <div className="part1">
            <div className="circle4">
            <div className="circle3"><img className="circle2" src={pay} /></div>
            </div>
            <div className="services">Cable Subscriptions</div>
            </div>

            <div className="part1">
            <div className="circle4">
            <div className="circle3"><img className="circle2" src={foreign} /></div>
            </div>
            <div className="services">Foreign Numbers</div>
            </div>

            <div className="part1">
            <div className="circle4">
            <div className="circle3"><img className="circle2" src={bill}/></div>
            </div>
            <div className="services">Utility Bill Payments, etc.</div>
            </div>
            </div>

            <div className="involve">Now, here's where you come in:
            When people make purchases from us (airtime, data, or anything else), we receive a 
            commission from the source company. Most platforms keep those profits — but not us. 
            We split it with you, because that’s how partnership should work.
            So, when you refer someone, every time they make a transaction — whether it's once a 
            month or 1000 times a day — you earn a commission. And you can withdraw to any bank in 
            Nigeria at any time. It’s simple, transparent, and built for YOU.
            </div>
        </div>
        </div>

        <div className="whyjoin">
        <div className="genspirit">
        <div className="free">Why Join Spirit Media's Affiliate Program?</div>

        <div>
        <div className="part2">
        <div className="circle1"><svg className="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg></div>
        <div>Lifetime Commissions - Earn endlessly from every customer you refer.</div>
        </div>

        <div className="part2">
        <div className="circle1"><svg className="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg></div>
        <div>No Cap, No Delays - Withdraw anytime. Get paid even if they buy 1000 times a day.</div>
        </div>

        <div className="part2">
        <div className="circle1"><svg className="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg></div>
        <div>Plug-and-Earn - No tech knowledge needed. Just share your link and watch it grow.</div>
        </div>

        <div className="part2">
        <div className="circle1"><svg className="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg></div>
        <div className="passive"><span>100% Passive Income</span> - Your referrals do the work; you enjoy the reward.</div>
        </div>
        </div>
        </div>
        </div>

        <div className="bonus">
            <div className="free">FREE BONUS: Download Our Affiliate Success Kit</div>

            <div className="free1">Want to grow your affiliate income faster? Grab our FREE Affiliate Success Kit — filled with:</div>
            <div>
                <div className="part2">
            <div className="circle1"><svg className="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg></div>
            <div>Proven tips to get your first 100 referrals</div>
            </div>

            <div className="part2">
            <div className="circle1"><svg className="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg></div>
            <div>Ready-to-use marketing templates</div>
            </div>

            <div className="part2">
            <div className="circle1"><svg className="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg></div>
            <div>Daily content ideas to keep your audience engaged</div>
            </div>

            <div className="part2">
            {/* <div className="circle1"><svg className="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg></div> */}
            <div className="download">Download Now - It's Free!</div>
            </div>
            </div>
        </div>

        <div className="started">
            <div className="free">Get Started in 3 Easy Steps:</div>
            <div className="">
                <div className="aff">1. Sign Up for your affiliate account</div>
                <div className="aff">2. Get your referral link instantly</div>
                <div className="aff">3. Share with your network - friends, social media, 
                    WhatsApp groups, and beyond! Every transaction they make, 
                    you earn. It's that simple.</div></div>
        </div>

        <div className="fade">
            <div className="sleep">
                <div className="icon12"><svg className='icon2 col' width="28" height="17" viewBox="0 0 32 32" fill="none">
            <path d="M28 20C28 20.7072 27.719 21.3855 27.219 21.8856C26.7189 22.3857 26.0406 22.6667 25.3333 22.6667H9.33333L4 28V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V20Z" stroke="#008EA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></div>
            <div className="free">Don't Sleep on This</div>
            </div>
           
        <div className="part2">
        <div className="circle1"><svg className="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg></div>
        <div>The best time to build passive income was yesterday.</div>
        </div>

        <div className="part2">
        <div className="circle1"><svg className="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg></div>
        <div>The next best time is now.</div>
        </div>

        <div className="part2">
        <div className="circle1"><svg className="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg></div>
        <div>Join hundreds already earning daily and growing their financial freedom with Spirit Media.</div>
        </div>

        <div className="free2">Join the Affiliate Program Now!</div>
        </div>
        </div>
      </div>  
    )
}

export default Refer;