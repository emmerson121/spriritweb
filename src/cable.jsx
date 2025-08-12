import React from 'react';
import './admin.css';

const Cable = () =>{

    const dstvSubscription = [
        {subTransaction: 'CT1001', subType: 'DSTV', subName: 'Okafor Chinedu', subAccount: 1023456789, subValue: '7,500', subStatus: 'Success', subDate: '2025-06-27'},
        {subTransaction: 'CT1002', subType: 'GOTV', subName: 'Grace Johnson', subAccount: 2087654321, subValue: '2,500', subStatus: 'Pending', subDate: '2025-06-26'},
        {subTransaction: 'CT1003', subType: 'Startimes', subName: 'Kingsley U.', subAccount: 3009876543, subValue: '3,000', subStatus: 'Failed', subDate: '2025-06-25'},
        {subTransaction: 'CT1004', subType: 'DSTV', subName: 'Blessing A.', subAccount: 1045678912, subValue: '5,000', subStatus: 'Success', subDate: '2025-06-24'}
    ]

    return(
        <div className='subscriptions'>
            <div className='subtitle'>
                <div className='heading'>Cable TV Transactions</div>
            </div>

            <div className='scroll1'>
            <div className='scroll2'>
            <div className='firsttable'>
                <div className="secondtable">
                    <div className="size1">ID</div>
                    <div className="size1">Provider</div>
                    <div className="size1">User</div>
                    <div className="size1">Smart Card No.</div>
                    <div className="size1">Amount</div>
                    <div className="size1">Status</div>
                    <div className="size1">Date</div>
                </div>

            {dstvSubscription.map((app,id) =>(
                <div className="thirdtable" key={id}>
                    <div className="tranx">{app.subTransaction}</div>
                    <div className="net">{app.subType}</div>
                    <div className="title">{app.subName}</div>
                    <div className="reach">{app.subAccount}</div>
                    <div className="value">{app.subValue}</div>
                    <div className="sit" style={{color: app.subStatus === 'Success' ? 'green' : app.subStatus === 'Pending' ? 'brown' : app.subStatus ==='Failed' ? 'red' : 'green'}}>{app.subStatus}</div>
                    <div className="duration">{app.subDate}</div>
                </div>
                ))}
            </div>
            </div>
            </div>
        </div>
    )
}

export default Cable;