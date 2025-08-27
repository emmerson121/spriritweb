import React from "react";
import './admin.css';

const Apierrors = () =>{
    const log = [
        {logId: '1', logEndpoint: '/api/airtime/buy', logMessage: 'Insufficient balance', logStatus: '400', logDate: '2025-08-07', logTime: '10:12:45'},
        {logId: '2', logEndpoint: '/api/data/verify', logMessage: 'Timeout Error', logStatus: '504', logDate: '2025-08-06', logTime: '09:44:12'},
        {logId: '3', logEndpoint: '/api/electricity/purchase', logMessage: 'Invalid meter number', logStatus: '422', logDate: '2025-08-05', logTime: '18:20:10'}
    ]

    return(
        <div className="log">
            <div className="subtitle">
            <div className="heading">API Errors Log</div>
            </div>

            <div className="scroll1">
                <div className="scroll2">
                    <div className="firsttable">
                        <div className="fourthtable">
                            <div className="size1">ID</div>
                            <div className="size1">Endpoint</div>
                            <div className="size1">Error Message</div>
                            <div className="size1">Status Code</div>
                            <div className="size1">Timestamp</div>
                        </div>

                {log.map((app,id) =>(
                        <div className="thirdtable" key={id}>
                            <div className="datA">{app.logId}</div>
                            <div className="datA">{app.logEndpoint}</div>
                            <div className="datA" style={{color: 'red'}}>{app.logMessage}</div>
                            <div className="datA">{app.logStatus}</div>
                            <div className="timestamp">
                            <div className="size2">{app.logDate}</div>
                            <div className="size2">{app.logTime}</div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apierrors;