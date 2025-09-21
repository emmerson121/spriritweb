import React from "react";
import './admin.css';

const FailedPayments = () =>{

    const failedPay = [
        {failedUsername: 'Chinedu Okafor', failedEmail: 'chineduokafor@gmail.com', failedPayStatus: 'Status: Payment Failed', failedPayOption1: 'Refund', failedPayOption2: 'Retry'},
        {failedUsername: 'Grace Johnson', failedEmail: 'gracejohnson@gmail.com', failedPayStatus: 'Status: Payment Failed', failedPayOption1: 'Refund', failedPayOption2: 'Retry'},
        {failedUsername: 'Kingsley U.', failedEmail: 'kingsleyu001@gmail.com', failedPayStatus: 'Status: Payment Failed', failedPayOption1: 'Refund', failedPayOption2: 'Retry'},
         {failedUsername: 'Blessing A.', failedEmail: 'blessingakachi@gmail.com', failedPayStatus: 'Status: Payment Failed', failedPayOption1: 'Refund', failedPayOption2: 'Retry'}
    ]
    
    return(
        <div className='over3'>
        <div className='subtitle'>
            <div className='heading'>Failed Payments</div>
        </div>
        <div className='failedCard'>
        {failedPay.map((app,id) =>(
            <div className='fullcard' key={id}>
            <div className='fullname'>{app.failedUsername}</div>
            <div className='mailAddress'>{app.failedEmail}</div>

            <div className='role1'>{app.susReason}</div>

            <div className='payStatus'>{app.failedPayStatus}</div>

            <div className='confirm'>
                <div className='paymentBox1'>{app.failedPayOption1}</div>
                <div className='paymentBox2'>{app.failedPayOption2}</div>
            </div>
        </div>
        ))}
        </div>
        </div>
    )
}

export default FailedPayments;