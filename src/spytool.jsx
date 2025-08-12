import React from 'react';
import './admin.css';

const Spy = () =>{

    const spydata = [
        {spyId: 'SPY001', spyName: 'Whatsapp Tracker', spyUser: 'Daniel Obi', spyStatus: 'Pending', spyDate: '2025-07-27'},
        {spyId: 'SPY002', spyName: 'SMS Monitor', spyUser: 'Chika Johnson', spyStatus: 'Approved', spyDate: '2025-07-26'},
        {spyId: 'SPY003', spyName: 'Call Recorder', spyUser: 'Adaeze Umeh', spyStatus: 'Rejected', spyDate: '2025-07-25'}
    ];

    return(
        <div className='subscriptions'>
            <div className='subtitle1'>
                <div className='heading'>Spy Tool Requests</div>
            </div>

            <div className='scroll1'>
            <div className='scroll2'>
            <div className='firsttable'>
                <div className="fourthtable">
                    <div className="size1">Request ID</div>
                    <div className="size1">Total Name</div>
                    <div className="size1">User</div>
                    <div className="size1">Status</div>
                    <div className="size1">Date</div>
                </div>

                {spydata.map((app,id) =>(
                        <div className="thirdtable" key={id}>
                            <div className="datA">{app.spyId}</div>
                            <div className="datA">{app.spyName}</div>
                            <div className="datA">{app.spyUser}</div>
                            <div className="datA" style={{color: app.spyStatus === 'Pending' ? 'brown' : app.spyStatus === 'Approved' ? 'green' : app.spyStatus === 'Rejected' ? 'red' : 'brown'}}>{app.spyStatus}</div>
                            <div className="datA">{app.spyDate}</div>                            
                        </div>
                        ))}
            </div>
            </div>
            </div>
        </div>
    )
}

export default Spy;