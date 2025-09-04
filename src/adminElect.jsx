import React from "react";
import './admin.css';
import Page from "./Pagination/page";

const Adminelect = () =>{
    const electAdmin = [
        {electName: 'IKEDC', electToggle: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M224 128C118 128 32 214 32 320C32 426 118 512 224 512L416 512C522 512 608 426 608 320C608 214 522 128 416 128L224 128zM416 224C469 224 512 267 512 320C512 373 469 416 416 416C363 416 320 373 320 320C320 267 363 224 416 224z" fill="#008EA8"/></svg>, electInput: <input type="text" placeholder="65" />, electHash: '#', electVolt: 'per kWh', electUpdate: 'Update'},
        {electName: 'EEDC', electToggle: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M416 192C486.7 192 544 249.3 544 320C544 390.7 486.7 448 416 448L224 448C153.3 448 96 390.7 96 320C96 249.3 153.3 192 224 192L416 192zM608 320C608 214 522 128 416 128L224 128C118 128 32 214 32 320C32 426 118 512 224 512L416 512C522 512 608 426 608 320zM224 400C268.2 400 304 364.2 304 320C304 275.8 268.2 240 224 240C179.8 240 144 275.8 144 320C144 364.2 179.8 400 224 400z" fill="#008EA8"/></svg>, electInput: <input type="text" placeholder="62" />, electHash: '#', electVolt: 'per kWh', electUpdate: 'Update'},
        {electName: 'PHED', electToggle: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M224 128C118 128 32 214 32 320C32 426 118 512 224 512L416 512C522 512 608 426 608 320C608 214 522 128 416 128L224 128zM416 224C469 224 512 267 512 320C512 373 469 416 416 416C363 416 320 373 320 320C320 267 363 224 416 224z" fill="#008EA8"/></svg>, electInput: <input type="text" placeholder="64" />, electHash: '#', electVolt: 'per kWh', electUpdate: 'Update'},
        {electName: 'KEDCO', electToggle: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M224 128C118 128 32 214 32 320C32 426 118 512 224 512L416 512C522 512 608 426 608 320C608 214 522 128 416 128L224 128zM416 224C469 224 512 267 512 320C512 373 469 416 416 416C363 416 320 373 320 320C320 267 363 224 416 224z" fill="#008EA8"/></svg>, electInput: <input type="text" placeholder="63" />, electHash: '#', electVolt: 'per kWh', electUpdate: 'Update'}
    ]
    return(
        <div className="subscriptions">
           <div className='subtitle1'>
            <div className="electdisplay">
            <div className="electCharge">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M434.8 54.1C446.7 62.7 451.1 78.3 445.7 91.9L367.3 288L512 288C525.5 288 537.5 296.4 542.1 309.1C546.7 321.8 542.8 336 532.5 344.6L244.5 584.6C233.2 594 217.1 594.5 205.2 585.9C193.3 577.3 188.9 561.7 194.3 548.1L272.7 352L128 352C114.5 352 102.5 343.6 97.9 330.9C93.3 318.2 97.2 304 107.5 295.4L395.5 55.4C406.8 46 422.9 45.5 434.8 54.1z" fill="#008EA8"/></svg>
            </div>
                <div className='heading'>Electricity Providers</div>
                </div>

                <div>
                    <div className="freebiecard1">
                        <div className="addbutton">
                        <div className="icon20"><svg className="addlogo" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" fill="#008EA8"/></svg></div>
                        </div>
                        <div className="plus">Add Provider</div>
                        </div>
                </div>
            </div>  

        <div className="serviceSearch1">
                <form action="" className=''>                
                <div className='inputdet2'>
                    <input type='text' placeholder='Search provider...' />
                </div>
            </form>

            <div className="electopt">
                <div className="electopt1">All</div>
                <div className="electopt2">Active</div>
                <div className="electopt3">Inactive</div>
            </div>
           </div>

        {electAdmin.map((app,id) => (
           <div className="ikContainer" key={id}>
            <div className="ikedcshow">
                <div className="ikName">{app.electName}</div>
                <div className="toggleon">
                   {app.electToggle}
                    </div>
            </div>

            <div className="ikedcInput">
                {app.electInput}
                <div className="mainhash">
                <div className="ikhash">{app.electHash}</div>
                <div className="ikhash2">{app.electVolt}</div>
                </div>
            </div>

            <div className="ikUpdate">{app.electUpdate}</div>
           </div>
        ))}

        <Page />
         
        </div>
    )
}

export default Adminelect;