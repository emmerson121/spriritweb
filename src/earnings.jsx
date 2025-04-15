import React from "react";
import './contact.css';
import Dashboard from "./dashboard";

const Earnings = () =>{

    return(
        <div>
            <div className="totaldash">
            <Dashboard />

            <div className="earn">
            <div className="mainearn">
            <div className="earns">Earnings</div>
            <div className="withdraw">Withdraw Earnings</div>
            </div>

            <div className='referral'>
                    <div className='totalref'>
                        <div className='refA'>Total Earnings</div>
                        <div className='ref1'>#40,689</div>
                    </div>

                    <div className='totalref'>
                        <div className='refA'>Available Balance</div>
                        <div className='ref1'>#8,689</div>
                    </div>

                    <div className='totalref'>
                        <div className='refA'>Pending</div>
                        <div className='ref3'>#8,689</div>
                    </div>

                    <div className='totalref'>
                        <div className='refA'>Total Withdrawn</div>
                        <div className='ref1'>#8,689</div>
                    </div>

                </div>

                <div className="time1">
                    <div>
                        <select className="alltime">
                            <option>All Time</option>
                        </select>
                    </div>

                    <div>
                        <select className="alltime">
                            <option>All Services</option>
                        </select>
                    </div>
                </div>

                <div className='tableA'>
                    {/* <div className='tableB'>
                        <div className='data'>Description</div>
                        <div className='data'>Service</div>
                        <div className='data'>Amount</div>
                        <div className='data'>Date</div>
                        <div className='data'>Status</div>
                    </div> */}
                </div>

                <div className='table4'>
                <div className='tableB'>
                        <div className='data'>Description</div>
                        <div className='data'>Service</div>
                        <div className='data'>Amount</div>
                        <div className='data'>Date</div>
                        <div className='data'>Status</div>
                    </div>

                    <div className='table5'>
                        <div className='name'>Commission from Brooks</div>
                        <div className='airtime'>Airtime</div>
                        <div className='amount'>#50.00</div>
                        <div className='date'>14th Feb, 2024</div>
                        <div className='completed'>completed</div> 
                    </div>

                    <div className='table5'>
                        <div className='name'>Commission from Pearson</div>
                        <div className='airtime'>Spy App</div>
                        <div className='amount'>#1,530.00</div>
                        <div className='date'>14th Feb, 2024</div>
                        <div className='process'>processing</div> 
                    </div>

                    <div className='table5'>
                        <div className='name'>Withdrawal to Bank Account</div>
                        <div className='airtime'>Bank Transfer</div>
                        <div className='amount'>#5,000.00</div>
                        <div className='date'>13th Feb, 2024</div>
                        <div className='completed'>completed</div> 
                    </div>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Earnings;
