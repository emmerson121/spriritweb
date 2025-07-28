import React, { useState } from 'react'
import './admin.css';
import AdminOverview from './adminoverview';

const Admin = () => {
    const [show, setShow] = useState(true);
    const [section, setSection] = useState(<AdminOverview />);

    return(
        <div>
        <div className='admindash'>
            <div className='dash'>
            <div>Dashboard</div>
            </div>

            <ul className='list4'>
                <li className='list1 mcol' >
                    <div className='dash1'>Overview</div>
                </li>

                <li className='list1 mcol' onClick={() => setShow(!show)}>
                    <div className='dash1'>Users</div>
                    <div></div>
                    <div className="icon15">
                                {show ? <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                    {!show ?
                            <div className="itemsB">
                            <ul className="itemsA">
                                <li className="help1 col2">All users</li>
                                <li className="help1 col2" >Suspicious Accounts</li>

                                
                            </ul>
                            </div>
                        : ''}
                </li>

                <li className='list1 mcol'>
                    <div className='dash1'>Transactions</div>
                    <div className="icon15">
                                {show ? <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                </li>

                <li className='list1 mcol'>
                    <div className='dash1'>Services Management</div>
                    <div className="icon15">
                                {show ? <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                </li>

                <li className='list1 mcol'>
                    <div className='dash1'>Content Management</div>
                    <div className="icon15">
                                {show ? <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                </li>

                <li className='list1 mcol'>
                    <div className='dash1'>Orders & Requests</div>
                    <div className="icon15">
                                {show ? <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                </li>

                <li className='list1 mcol'>
                    <div className='dash1'>System Logs</div>
                    <div className="icon15">
                                {show ? <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                </li>

                <li className='list1 mcol'>
                    <div className='dash1'>Messages & Support</div>
                </li>

                <li className='list1 mcol'>
                    <div className='dash1'>Settings</div>
                </li>

                <li className='list1 mcol'>
                    <div className='dash1'>Logout</div>
                </li>

            </ul>
            
        </div>
        </div>
    );
}

export default Admin;