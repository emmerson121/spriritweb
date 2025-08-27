import React, { useState } from 'react';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import AdminOverview from './adminoverview';
import User from './alluser';
import Susaccounts from './susaccounts';
import Airtime from './airtimeData';
import Cable from './cable';
import Freebies from './freebiesMan';
import Plans from './dataplans';
import Spy from './spytool';
import Payment from './payment';
import Support from './support';
import Apierrors from './apiErrors';
import Roles from './roles';
import FreebiesMan from './freebiesManagement';
import Electricity from './electricity';
import Cracked from './cracked';
import Movies from './movies';


const Admin = () => {
    const [user, setUser] = useState(true);
    const [trans, setTrans] = useState(true);
    const [toggle, setToggle] = useState(true);
    const [spy, setSpy] = useState(true);
    const [logs, setLogs] = useState(true);
    const [service, setService] = useState(true);
    const [content, setContent] = useState(true);
    const [setting, setSetting] = useState(true);
    const [logOut, setLogOut] = useState(true);
    const [over, setOver] = useState(<AdminOverview />);

    return(
        <div className='overallContainer'>
        <div className='container'>
            <div className='adminBar'>
             <div className="bar"><FontAwesomeIcon onClick={() => setToggle(!toggle)} className="famark" icon={faBars} /></div>   
            </div>
        <div className='dashboard1'>
            <div className='admindash'>
            <div className='dash'>
            <div>Dashboard</div>
            </div>



            <ul className='list4'>
                <li className='list5 mcol2' onClick={() => setOver(<AdminOverview />)}>
                    <div className='dashtext'>Overview</div>
                </li>

                <li className='mcol2'>
                    <div className='list5 mainlink' onClick={() => setUser(!user)}>
                    <div className='dashtext'>Users</div>
                    <div className="icon15">
                                {user ? <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                    </div>

                    {!user ?
                    <div className='trans2'>
                        <ul className='trans1'>
                            <li className='subairtime' onClick={() => setOver(<User />)}>All Users</li>
                            <li className='subairtime' onClick={() => setOver(<Susaccounts />)}>Suspicious Users</li>
                        </ul>
                    </div> 
                    : ''}

                </li>

                <li className='mcol2'>
                    <div className='list5 mainlink' onClick={() => setTrans(!trans)}>
                    <div className='dashtext'>Transactions</div>
                    <div className="icon15">
                                {trans ? <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                    </div>          

                    {!trans ?
                    <div className='trans2'>
                        <ul className='trans1'>
                            <li className='subairtime' onClick={() => setOver(<Airtime />)}>Airtime and Data</li>
                            <li className='subairtime' onClick={() => setOver(<Cable />)}>Cable TV</li>
                            <li className='subairtime' onClick={() => setOver(<Electricity />)}>Electricity</li>
                            <li className='subairtime' >Foreign Numbers</li>
                            <li className='subairtime' onClick={() => setOver(<FreebiesMan />)}>Freebies</li>
                            <li className='subairtime' onClick={() => setOver(<Spy />)}>Spy Tools</li>
                            <li className='subairtime' onClick={() => setOver(<Cracked />)} >Cracked Tools</li>
                            <li className='subairtime' onClick={() => setOver(<Movies />)}>Movies</li>
                        </ul>
                    </div> 
                    : ''}
                    
                </li>

                <li className='mcol2'>
                    <div className='list5 mainlink' onClick={() => setService(!service)}>
                    <div className='dashtext'>Services Management</div>
                    <div className="icon15">
                                {service ? <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                    </div>          

                    {!service ?
                    <div className='trans2'>
                        <ul className='trans1'>
                            <li className='subairtime' >Airtime Providers</li>
                            <li className='subairtime' onClick={() => setOver(<Plans />)}>Data Plans</li>
                            <li className='subairtime' >Cable Providers</li>
                            <li className='subairtime' >Electricity Providers</li>
                            <li className='subairtime' >Foreign Number APIs</li>
                        </ul>
                    </div> 
                    : ''}
                    
                </li>

                <li className='mcol2'>
                    <div className='list5 mainlink' onClick={() => setContent(!content)}>
                    <div className='dashtext'>Content Management</div>
                    <div className="icon15">
                                {content ? <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                    </div>          

                    {!content ?
                    <div className='trans2'>
                        <ul className='trans1'>
                            <li className='subairtime' >Add/Remove Movies</li>
                            <li className='subairtime' >Upload Cracked Tools</li>
                            <li className='subairtime' onClick={() => setOver(<Freebies />)}>Manage Freebies</li>
                        </ul>
                    </div> 
                    : ''}
                    
                </li>

                <li className='mcol2'>
                    <div className='list5 mainlink' onClick={() => setSpy(!spy)}>
                    <div className='dashtext'>Orders & Requests</div>
                    <div className="icon15">
                                {spy ? <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                    </div>

                    {!spy ?
                    <div className='trans2'>
                        <ul className='trans1'>
                            <li className='subairtime' >Spy Tool Requests</li>
                            <li className='subairtime' >Cracked Software Requests</li>
                        </ul>
                    </div> 
                    : ''}

                </li>

                <li className='mcol2'>
                    <div className='list5 mainlink' onClick={() => setLogs(!logs)}>
                    <div className='dashtext'>System Logs</div>
                    <div className="icon15">
                                {logs ? <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                    </div>

                    {!logs ?
                    <div className='trans2'>
                        <ul className='trans1'>
                            <li className='subairtime'>Failed Payments</li>
                            <li className='subairtime' onClick={() => setOver(<Apierrors />)}>Api Errors</li>
                            <li className='subairtime' onClick={() => setOver(<Susaccounts />)}>Suspicious Logins</li>
                        </ul>
                    </div> 
                    : ''}
                </li>

                <li className='list5 mcol2' onClick={() => setOver(<Support />)}>
                    <div className='dashtext'>Messages & Support</div>
                </li>
                
                <li className='mcol2'>
                    <div className='list5 mainlink' onClick={() => setSetting(!setting)}>
                    <div className='dashtext'>Settings</div>
                    <div className="icon15">
                                {setting ? <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                    </div>

                    {!setting ?
                    <div className='trans2'>
                        <ul className='trans1'>
                            <li className='subairtime' onClick={() => setOver(<Payment />)}>Payment Integrations</li>
                            <li className='subairtime' >System Toggles</li>
                            <li className='subairtime' onClick={() => setOver(<Roles />)}>Admin Roles</li>
                        </ul>
                    </div> 
                    : ''}

                </li>

                <li className='list5 mcol2'>
                    <div className='dashtext'>Logout</div>
                </li>

            </ul>
            
        </div>
       
        </div>

        {/* <div className='dashboardItems'>
        </div> */}
        {over}
        </div>

        {!toggle ?
        <div className='navbar1'>
        <div className='nav1'>
        <div className="xmark"><FontAwesomeIcon className="xmark" onClick={() => setToggle(true)} icon={faXmark} /></div>
        <ul className='mainlist mainlist1'>
            <li className='navlist mcol2' onClick={() => setOver( <AdminOverview />)}>
            <div className='dashtext1'>Overview</div>
            </li>

            <li className='navlist mcol2'>
                    <div className='navlink' onClick={() => setUser(!user)}>
                    <div className='dashtext1'>Users</div>
                    <div className="image1">
                                {user ? <svg className="col3" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col3" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                    </div>

                    {!user ?
                    <div className='trans4'>
                        <ul className='trans3'>
                            <li className='subairtime1' onClick={() => setOver(<User />)}>All Users</li>
                            <li className='subairtime1' onClick={() => setOver(<Susaccounts />)}>Suspicious Users</li>
                        </ul>
                    </div> 
                    : ''}

                </li>

            <li className='navlist mcol2'>
                    <div className='navlink' onClick={() => setTrans(!trans)}>
                    <div className='dashtext1'>Transactions</div>
                    <div className="image1">
                                {trans ? <svg className="col3" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col3" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                    </div>

                    {!trans ?
                    <div className='trans4'>
                        <ul className='trans3'>
                            <li className='subairtime1' onClick={() => setOver(<Airtime />)}>Airtime and Data</li>
                            <li className='subairtime1' onClick={() => setOver(<Cable />)}>Cable TV</li>
                            <li className='subairtime1' onClick={() => setOver(<Electricity />)}>Electricity</li>
                            <li className='subairtime1'>Foreign Numbers</li>
                            <li className='subairtime1' onClick={() => setOver(<FreebiesMan />)}>Freebies</li>
                            <li className='subairtime1' onClick={() => setOver(<Spy />)}>Spy Tools</li>
                            <li className='subairtime1' onClick={() => setOver(<Cracked />)}>Cracked Tools</li>
                            <li className='subairtime1' onClick={() => setOver(<Movies />)}>Movies</li>
                        </ul>
                    </div> 
                    : ''}
                </li>    

            <li className='navlist mcol2'>
                    <div className='navlink' onClick={() => setService(!service)}>
                    <div className='dashtext1'>Services Management</div>
                    <div className="image1">
                                {service ? <svg className="col3" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                    </div>          

                    {!service ?
                    <div className='trans4'>
                        <ul className='trans3'>
                            <li className='subairtime1' >Airtime Providers</li>
                            <li className='subairtime1' onClick={() => setOver(<Plans />)}>Data Plans</li>
                            <li className='subairtime1' >Cable Providers</li>
                            <li className='subairtime1' >Electricity Providers</li>
                            <li className='subairtime1' >Foreign Number APIs</li>
                        </ul>
                    </div> 
                    : ''}
                    
                </li>

            <li className='navlist mcol2'>
                    <div className='navlink' onClick={() => setContent(!content)}>
                    <div className='dashtext1'>Content Management</div>
                    <div className="image1">
                                {content ? <svg className="col3" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                    </div>          

                    {!content ?
                    <div className='trans4'>
                        <ul className='trans3'>
                            <li className='subairtime1' >Add/Remove Movies</li>
                            <li className='subairtime1' >Upload Cracked Tools</li>
                            <li className='subairtime1' onClick={() => setOver(<Freebies />)}>Manage Freebies</li>
                        </ul>
                    </div> 
                    : ''}
                    
                </li>

            <li className='navlist mcol2'>
                    <div className='navlink' onClick={() => setSpy(!spy)}>
                    <div className='dashtext1'>Orders & Requests</div>
                    <div className="image1">
                                {spy ? <svg className="col3" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                    </div>

                    {!spy ?
                    <div className='trans4'>
                        <ul className='trans3'>
                            <li className='subairtime1' >Spy Tool Requests</li>
                            <li className='subairtime1' >Cracked Software Requests</li>
                        </ul>
                    </div> 
                    : ''}

                </li>

            <li className='navlist mcol2'>
                    <div className='navlink' onClick={() => setLogs(!logs)}>
                    <div className='dashtext1'>System Logs</div>
                    <div className="image1">
                                {logs ? <svg className="col3" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                    </div>

                    {!logs ?
                    <div className='trans4'>
                        <ul className='trans3'>
                            <li className='subairtime1'>Failed Payments</li>
                            <li className='subairtime1' onClick={() => setOver(<Apierrors />)}>Api Errors</li>
                            <li className='subairtime1' onClick={() => setOver(<Susaccounts />)}>Suspicious Logins</li>
                        </ul>
                    </div> 
                    : ''}
                </li>

            <li className='navlist mcol2' onClick={() => setOver(<Support />)}>
                    <div className='dashtext1'>Messages & Support</div>
                </li>

            <li className='navlist mcol2'>
                    <div className='navlink' onClick={() => setSetting(!setting)}>
                    <div className='dashtext1'>Settings</div>
                    <div className="image1">
                                {setting ? <svg className="col3" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className="col2" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                                </div>
                    </div>

                    {!setting ?
                    <div className='trans4'>
                        <ul className='trans3'>
                            <li className='subairtime1' onClick={() => setOver(<Payment />)}>Payment Integrations</li>
                            <li className='subairtime1'>System Toggles</li>
                            <li className='subairtime1' onClick={() => setOver(<Roles />)}>Admin Roles</li>
                        </ul>
                    </div> 
                    : ''}

                </li>

            <li className='navlist mcol2'>
                    <div className='dashtext1'>Logout</div>
                </li>
        </ul>
        </div>
        </div> 
        : ''}
    
        </div> 
    );
}

export default Admin;