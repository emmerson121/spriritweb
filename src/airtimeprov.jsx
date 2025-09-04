import React from "react";
import './admin.css';
import mymtn from './img/mymtn.svg';
import mtnlogo from './img/mtnlogo.png'
import airtel from './img/airtel.png';
import airtel1 from './img/airtel1.png';
import airtellogo from './img/airtellogo.svg'
import ninemobile from './img/ninemobile.png';
import glo from './img/glo.png';
import mtnlogo1 from './img/mtnlogo1.png';
import Page from "./Pagination/page";

const AirtimeProv = () =>{
    const servMan = [
        {networkImg: <div className="myMtn2"><img className="myMtn" src={mtnlogo1} /></div>, networkName: 'MTN', networkName1: 'MTN', networkStatus: 'Active', networkOrder: 'Buy Price', networkOrder1: 'Sell Price', networkInput: <input type="text" placeholder="95" />, networkInput1: <input type="text" placeholder="100" />, networkCommand: 'Disable'},
        {networkImg: <div className="myMtn2"><img className="myMtn" src={airtel1} /></div>, networkName: 'Airtel', networkName1: 'Airtel', networkStatus: 'Active', networkOrder: 'Buy Price', networkOrder1: 'Sell Price', networkInput: <input type="text" placeholder="94" />, networkInput1: <input type="text" placeholder="99" />, networkCommand: 'Disable'},
        {networkImg: <div className="myMtn1"><img className="myMtn" src={glo} /></div>, networkName: 'Glo', networkName1: 'Glo', networkStatus: 'Inactive', networkOrder: 'Buy Price', networkOrder1: 'Sell Price', networkInput: <input type="text" placeholder="93" />, networkInput1: <input type="text" placeholder="98" />, networkCommand: 'Enable'},
        {networkImg: <div className="myMtn1"><img className="myMtn" src={ninemobile} /></div>, networkName: '9mobile', networkName1: '9mobile', networkStatus: 'Active', networkOrder: 'Buy Price', networkOrder1: 'Sell Price', networkInput: <input type="text" placeholder="92" />, networkInput1: <input type="text" placeholder="97" />, networkCommand: 'Disable'}
    ]
    return(
        <div className="subscriptions">
            <div className='subtitle1'>
                <div className='heading'>Airtime Providers</div>

                <div>
                    <div className="freebiecard1">
                        <div className="addbutton">
                        <div className="icon20"><svg className="addlogo" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" fill="#008EA8"/></svg></div>
                        </div>
                        <div className="plus">Add Provider</div>
                        </div>
                </div>
            </div>

            <div className="serviceSearch">
                <form action="" className=''>                
                <div className='inputdet'>
                    <input type='text' placeholder='Search provider...' />
                </div>
            </form>

            <select name="" id="" className="allBut">
                <option value="">All</option>
            </select>
            {/* <div className='allBut'>All</div> */}
           </div>

    {servMan.map((app,id) =>(
        <div className="slide1" key={id}>
            <div className="networklogo">
                <div className="">{app.networkImg}</div>
                <div className="slideNetwork">{app.networkName}</div>
            </div>

            <div className="networklogo">
                <div className="networktype">{app.networkName1}</div>
                <div className="networkStatus" style={{color: app.networkStatus === 'Active' ? 'green' : app.networkStatus === 'Inactive' ? 'red' : 'green'}}>{app.networkStatus}</div>
            </div>

            <div className="networklogo">
                <div className="buyprice">{app.networkOrder}</div>
                <div className="networkval">{app.networkInput}</div>
            </div>

            <div className="networklogo">
                <div className="buyprice">{app.networkOrder1}</div>
                <div className="networkval">{app.networkInput1}</div>
            </div>

            <div className="networkBut" style={{backgroundColor: app.networkStatus === 'Disable' ? 'red' : app.networkCommand === 'Enable' ? 'green' : 'red'}}>{app.networkCommand}</div>
        </div>
    ))}    

    <Page />

        </div>
    )
}

export default AirtimeProv;