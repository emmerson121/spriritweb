import React from "react";
import './admin.css';
import Page from "./Pagination/page";

const Cableprov = () =>{
    const cableTV = [
        {cableType: 'Joll', cableStatus: 'Remove', cableHash: '#', cableInput: <input type="text" placeholder="3600" />},
         {cableType: 'Max', cableStatus: 'Remove', cableHash: '#', cableInput: <input type="text" placeholder="4850" />},
          {cableType: 'Med', cableStatus: 'Remove', cableHash: '#', cableInput: <input type="text" placeholder="5200" />}
    ]
    return(
        <div className="subscriptions">
            <div className='subtitle1'>
                <div className='heading'>Cable Providers</div>

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

           <div className="cableHolder">
                <div className="maingotv">
                    <div className="gotv">
                        <div className="gotv1">GOTV</div>
                        <div className="gotv2">Active</div>
                    </div>

                    <div className="cableBut">Disable</div>
                </div>

            {cableTV.map((app,id) =>(
            <div className="cabledetails" key={id}>
                <div className="jollDetails">
                    <div className="joll1">{app.cableType}</div>
                    <div className="joll2">{app.cableStatus}</div>
                </div>

                <div className="nairaControl">
                    <div className="nairaSign">{app.cableHash}</div>
                    <div className="nairaInput">{app.cableInput}</div>
                </div>
            </div>
            ))}   

            <hr /> 

            <div className="planText">Add plan</div>

            <div className="planContainer">
               <div className="planDetail"><input type="text" placeholder="Plan name" /></div>
               <div className="planContainer2"> 
               <div className="planDetail2"><input type="text" placeholder="Price" /></div>
               <div className="planBut">Add</div>
               </div>
            </div>
           </div>

           <Page />
        </div>
    )
}

export default Cableprov;