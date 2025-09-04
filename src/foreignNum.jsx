import React from "react";
import './admin.css';
import Page from "./Pagination/page";

const ForeignNumbers = () =>{
    const foreignNumDetails = [
        {numId: 'Id-1', numCountry: 'United States', numOperator: 'AT&T', numCode: '+1', numPrice: '1.39', numStatus: <div className="foreignStatus2">Inactive</div>, numUpdate: '2025-08-29', numEdit: 'Edit', numSync: 'Sync', numAction: 'Deactivate'},
        {numId: 'Id-2', numCountry: 'United Kingdom', numOperator: 'Vodafone', numCode: '+44', numPrice: '3.46', numStatus: <div className="foreignStatus1">Active</div>, numUpdate: '2025-08-28', numEdit: 'Edit', numSync: 'Sync', numAction: 'Deactivate'},
        {numId: 'Id-3', numCountry: 'Germany', numOperator: 'Deutsche Telekom', numCode: '+49', numPrice: '1.26', numStatus: <div className="foreignStatus1">Active</div>, numUpdate: '2025-08-27', numEdit: 'Edit', numSync: 'Sync', numAction: 'Deactivate'},
        {numId: 'Id-4', numCountry: 'France', numOperator: 'Orange', numCode: '+33', numPrice: '5.15', numStatus: <div className="foreignStatus1">Active</div>, numUpdate: '2025-08-26', numEdit: 'Edit', numSync: 'Sync', numAction: 'Deactivate'},
        {numId: 'Id-5', numCountry: 'Nigeria', numOperator: 'MTN', numCode: '+234', numPrice: '4.93', numStatus: <div className="foreignStatus2">Inactive</div>, numUpdate: '2025-08-25', numEdit: 'Edit', numSync: 'Sync', numAction: 'Deactivate'}
    ]
    return(
        <div className="subscriptions">
            <div className='subtitle'>
            <div className='heading'>Foreign Number APIs</div>
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

            <div className="foreignrefresh">Refresh</div>
            {/* <div className='allBut'>All</div> */}
           </div>

           <div className='scroll1'>
            <div className='scroll2'>
                <div className="firsttable">    
                <div className="secondtable">
                    <div className="size1">ID</div>
                    <div className="size1">Country</div>
                    <div className="size1">Operator</div>
                    <div className="size1">Code</div>
                    <div className="size1">Price</div>
                    <div className="size1">Status</div>
                    <div className="size1">Updated</div>
                    <div className="size2">Actions</div>
                </div>

            {foreignNumDetails.map((app,id) =>(
                <div className="thirdtable" key={id}>
                    <div className="datA">{app.numId}</div>
                    <div className="datA">{app.numCountry}</div>
                    <div className="datA">{app.numOperator}</div>
                    <div className="datA">{app.numCode}</div>
                    <div className="datA">{app.numPrice}</div>
                    <div className="datA" style={{color: app.numStatus === 'Active' ? 'green' : app.numStatus === 'Inactive' ? 'red' : 'green'}}>{app.numStatus}</div>
                    <div className="datA">{app.numUpdate}</div>
                    <div className="foreignEdit">
                    <div className="foreignEdit1">{app.numEdit}</div>
                    <div className="foreignEdit1">{app.numSync}</div>
                    <div className="datA1 foreignAction">{app.numAction}</div>
                    </div>
                </div>
                ))}
                </div>
                </div>
            </div>

            <Page />
        </div>
    )
}

export default ForeignNumbers;