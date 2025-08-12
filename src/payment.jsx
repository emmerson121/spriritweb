import React from "react";
import './admin.css';

const Payment = () =>{

    return(
        <div className="paymentForm">
            <div className="incomingImg3">
                <div className="header1">Payment Integration Settings</div>
            

            <form action="">
                <div className="formInput">
                    <label htmlFor="">Paystack Public Key</label>
                    <input type="text" placeholder="pk_test_********" />
                </div>

                <div className="formInput">
                    <label htmlFor="">Paystack Secret Key</label>
                    <input type="text" placeholder="sk_test_********" />
                </div>

                <div className="formInput">
                    <label htmlFor="">Webhook URL</label>
                    <input type="text" placeholder="https://yourdomainn.com/api/web" />
                </div>

                <button className="sendButton2">Save Settings</button>
            </form>
            </div>
        </div>
    )
}

export default Payment;