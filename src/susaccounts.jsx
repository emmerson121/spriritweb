import React from 'react';
import './admin.css';

const Susaccounts = () =>{

    const suspiciousAcc = [
        {susUsername: 'Fake User 101', susEmail: 'suspicious1@gmail.com', susReason: 'Reason: Multiple failed logins', susStatus: 'Status: Flagged', susReview: 'Review', susBan: 'Ban'},
        {susUsername: 'Bot Account', susEmail: 'botuser@gmail.com', susReason: 'Reason: Automated activity detected', susStatus: 'Status: Locked', susReview: 'Review', susBan: 'Ban'},
        {susUsername: 'Suspicious Reseller', susEmail: 'resellerx@gmail.com', susReason: 'Reason: High frequency airtime purchases', susStatus: 'Status: Under Review', susReview: 'Review', susBan: 'Ban'}
    ]
    
    return(
        <div className='subscriptions'>
        <div className='subtitle'>
            <div></div>
            <div className='suspense'>Suspicious Accounts</div>
        </div>
        <div className='maincard'>
        {suspiciousAcc.map((app,id) =>(
            <div className='card' key={id}>
            <div className='surname'>{app.susUsername}</div>
            <div className='address'>{app.susEmail}</div>

            <div className='role1'>{app.susReason}</div>

            <div className='flagged'>{app.susStatus}</div>

            <div className='confirm'>
                <div className='state1'>{app.susReview}</div>
                <div className='ban1'>{app.susBan}</div>
            </div>
        </div>
        ))}
        </div>
        </div>
    )
}

export default Susaccounts;