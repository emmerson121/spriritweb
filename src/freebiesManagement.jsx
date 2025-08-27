import React from "react";
import './admin.css';

const FreebiesMan = () =>{
    const freeman = [
        {freeId: '1', freeUser: 'John Doe', freeType: 'Free 1GB Data', freeQuantity: '1', freeStatus: 'Delivered', freeDate: '2025-08-11'},
        {freeId: '2', freeUser: 'Jane Smith', freeType: 'Free SIM Card', freeQuantity: '2', freeStatus: 'Pending', freeDate: '2025-08-12'},
        {freeId: '3', freeUser: 'Kingsley O.', freeType: 'Free Data Package', freeQuantity: '3', freeStatus: 'Failed', freeDate: '2025-08-13', logTime: '18:20:10'}
    ]

    return(
        <div className="log">
            <div className="subtitle">
            <div className="heading">Freebies</div>
            </div>

            <div className="scroll1">
                <div className="scroll2">
                    <div className="firsttable">
                        <div className="fourthtable">
                            <div className="size1">ID</div>
                            <div className="size1">User</div>
                            <div className="size1">Freebie</div>
                            <div className="size1">Quantity</div>
                            <div className="size1">Status</div>
                            <div className="size1">Date</div>
                        </div>

                {freeman.map((app,id) =>(
                        <div className="thirdtable" key={id}>
                            <div className="datA">{app.freeId}</div>
                            <div className="datA">{app.freeUser}</div>
                            <div className="datA">{app.freeType}</div>
                            <div className="datA">{app.freeQuantity}</div>
                            <div className="datA" style={{color: app.freeStatus === 'Delivered' ? 'green' : app.freeStatus === 'Pending' ? 'brown' : app.freeStatus === 'Failed' ? 'red' : 'green'}}>{app.freeStatus}</div>
                            <div className="datA">{app.freeDate}</div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreebiesMan;