import React from 'react';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan, faToggleOn } from "@fortawesome/fontawesome-free-solid";
import { color } from 'chart.js/helpers';

const Freebies = () =>{

    const freebiesdata = [
        {freebieCode: 'FB101', freebieType: 'Free MTN Data Config ', freebieCategory: 'Config Files', freebieUpload: 'Admin', freebieStatus: 'Active', freebieDate: '2025-06-27', freebieAction1: 'Edit', freebieAction2: 'Delete'},
        {freebieCode: 'FB102', freebieType: 'Free VPN Premium', freebieCategory: 'VPN', freebieUpload: 'Admin', freebieStatus: 'Inactive', freebieDate: '2025-06-26', freebieAction1: 'Edit', freebieAction2: 'Delete'}
    ]

    return( 
        <div className='subscriptions'>
            <div className='subtitle1'>
                <div className='heading'>Freebies Management</div>
                <div>
                    <div className="freebiecard1">
                        <div className="addbutton">
                        <div className="icon20"><svg className="addlogo" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" fill="#008EA8"/></svg></div>
                        </div>
                        <div className="plus">Add Freebie</div>
                        </div>
                </div>
            </div>

            <div className='scroll1'>
            <div className='scroll2'>
            <div className='firsttable'>
                <div className="fourthtable">
                    <div className="size1">ID</div>
                    <div className="size1">Title</div>
                    <div className="size1">Category</div>
                    <div className="size1">Uploaded By</div>
                    <div className="size1">Status</div>
                    <div className="size1">Date</div>
                    <div className="size1">Actions</div>
                </div>

                {freebiesdata.map((app,id) =>(
                <div className="thirdtable" key={id}>
                    <div className="datA">{app.freebieCode}</div>
                    <div className="datA">{app.freebieType}</div>
                    <div className="datA">{app.freebieCategory}</div>
                    <div className="datA">{app.freebieUpload}</div>
                    <div className="datA" style={{color: app.freebieStatus === 'Active' ? 'green' : app.freebieStatus === 'Inactive' ? 'red' : 'green'}}>{app.freebieStatus}</div>
                    <div className="datA">{app.freebieDate}</div>
                    <div className='verify1'>
                    <div className='editimg'><svg width='100%' height='100%' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M416.9 85.2L372 130.1L509.9 268L554.8 223.1C568.4 209.6 576 191.2 576 172C576 152.8 568.4 134.4 554.8 120.9L519.1 85.2C505.6 71.6 487.2 64 468 64C448.8 64 430.4 71.6 416.9 85.2zM338.1 164L122.9 379.1C112.2 389.8 104.4 403.2 100.3 417.8L64.9 545.6C62.6 553.9 64.9 562.9 71.1 569C77.3 575.1 86.2 577.5 94.5 575.2L222.3 539.7C236.9 535.6 250.2 527.9 261 517.1L476 301.9L338.1 164z" fill='#fff' stroke="#008EA8" stroke-width="40"/></svg></div>
                    <div className="editinfo">{app.freebieAction1}</div>
                    {/* <div className='editimg'><svg width='100%' height='100%' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M232.7 69.9C237.1 56.8 249.3 48 263.1 48L377 48C390.8 48 403 56.8 407.4 69.9L416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L224 96L232.7 69.9zM128 208L512 208L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 208zM216 272C202.7 272 192 282.7 192 296L192 488C192 501.3 202.7 512 216 512C229.3 512 240 501.3 240 488L240 296C240 282.7 229.3 272 216 272zM320 272C306.7 272 296 282.7 296 296L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 296C344 282.7 333.3 272 320 272zM424 272C410.7 272 400 282.7 400 296L400 488C400 501.3 410.7 512 424 512C437.3 512 448 501.3 448 488L448 296C448 282.7 437.3 272 424 272z" fill='#fff' stroke="red" stroke-width="25"/></svg></div> */}
                    <div className="deleteinfo">{app.freebieAction2}</div>
                    <div className='editimg'><svg width='100%' height='100%' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M224 128C118 128 32 214 32 320C32 426 118 512 224 512L416 512C522 512 608 426 608 320C608 214 522 128 416 128L224 128zM416 224C469 224 512 267 512 320C512 373 469 416 416 416C363 416 320 373 320 320C320 267 363 224 416 224z" fill='#fff' stroke="#008EA8" stroke-width="50"/></svg></div>
                    </div>
                    
                </div>
                ))}
            </div>
            </div>
            </div>
        </div>
    )
}

export default Freebies;