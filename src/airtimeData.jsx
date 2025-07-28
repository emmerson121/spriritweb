import React from "react";
import './admin.css';

const Airtime = () =>{

    const airtimeTrans = [
        {airtimeCode: 'TX20001', airtimeType: 'Airtime', airtimeNetwork: 'MTN', airtimeName: 'Chinedu Okafor', airtimeNumber: '08131234567', airtimeAmount: '500', airtimeStatus: 'Success', airtimeDate: '2025-06-27'},
        {airtimeCode: 'TX20002', airtimeType: 'Data', airtimeNetwork: 'Glo', airtimeName: 'Grace Johnson', airtimeNumber: '08053456789', airtimeAmount: '1,000', airtimeStatus: 'Pending', airtimeDate: '2025-06-26'},
        {airtimeCode: 'TX20003', airtimeType: 'Airtime', airtimeNetwork: 'Airtel', airtimeName: 'Kingsley U.', airtimeNumber: '08161234567', airtimeAmount: '200', airtimeStatus: 'Failed', airtimeDate: '2025-06-25'},
        {airtimeCode: 'TX20004', airtimeType: 'Data', airtimeNetwork: '9mobile', airtimeName: 'Blesiing A.', airtimeNumber: '0809234567', airtimeAmount: '2,000', airtimeStatus: 'Success', airtimeDate: '2025-06-24'}
    ]

    return(
        <div className="subscriptions">
            <div className="subtitle">
                <div></div>
                <div className="heading">Airtime & Data Transactions</div>
            </div>

            <div>
                <div>
                <div className="firsttable">    
                <div className="secondtable">
                    <div className="size1">ID</div>
                    <div className="size1">Type</div>
                    <div className="size1">Network</div>
                    <div className="size1">User</div>
                    <div className="size1">Phone</div>
                    <div className="size1">Amount</div>
                    <div className="size1">Status</div>
                    <div className="size1">Date</div>
                </div>

            {airtimeTrans.map((app,id) =>(
                <div className="thirdtable" key={id}>
                    <div className="tranx">{app.airtimeCode}</div>
                    <div className="proD">{app.airtimeType}</div>
                    <div className="net">{app.airtimeNetwork}</div>
                    <div className="title">{app.airtimeName}</div>
                    <div className="reach">{app.airtimeNumber}</div>
                    <div className="value">{app.airtimeAmount}</div>
                    <div className="sit" style={{color: app.airtimeStatus === 'Success' ? 'green' : app.airtimeStatus === 'Pending' ? 'brown' : app.airtimeStatus === 'Failed' ? 'red' : 'green'}}>{app.airtimeStatus}</div>
                    <div className="duration">{app.airtimeDate}</div>
                </div>
                ))}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Airtime;