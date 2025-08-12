import React from "react";
import './admin.css';

const Plans = () =>{
    const dataPlan = [
        {dataCode: '1', dataType: 'MTN', dataPlan: '1.5GB Daily', dataPrice: '#500', dataStatus: 'Active', dataDate: '2025-06-27', dataAction1: 'Edit', dataAction2: 'Delete'},
        {dataCode: '2', dataType: 'Airtel', dataPlan: '5GB Weekly', dataPrice: '#1,500', dataStatus: 'Inactive', dataDate: '2025-06-26', dataAction1: 'Edit', dataAction2: 'Delete'},
        {dataCode: '3', dataType: 'Glo', dataPlan: '10GB Monthly', dataPrice: '#2,000', dataStatus: 'Active', dataDate: '2025-06-25', dataAction1: 'Edit', dataAction2: 'Delete'}
    ]

    return(
        <div className='subscriptions'>
                    <div className='subtitle1'>
                        <div className='heading'>Manage Data Plans</div>
                        <div>
                            <div className="virtual4">
                                <div className="virtual8">
                                <div className="icon20"><svg className="virtual5" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" fill="#008EA8"/></svg></div>
                                </div>
                                <div className="add">Add Plan</div>
                                </div>
                        </div>
                    </div>
        
                    <div className='scroll1'>
                    <div className='scroll2'>
                    <div className='firsttable'>
                        <div className="fourthtable">
                            <div className="size1">ID</div>
                            <div className="size1">Network</div>
                            <div className="size1">Plan</div>
                            <div className="size1">Price</div>
                            <div className="size1">Status</div>
                            <div className="size1">Date</div>
                            <div className="size1">Actions</div>
                        </div>
        
                        {dataPlan.map((app,id) =>(
                        <div className="thirdtable" key={id}>
                            <div className="datA">{app.dataCode}</div>
                            <div className="datA">{app.dataType}</div>
                            <div className="datA">{app.dataPlan}</div>
                            <div className="datA">{app.dataPrice}</div>
                            <div className="datA" style={{color: app.dataStatus === 'Active' ? 'green' : app.dataStatus === 'Inactive' ? 'red' : 'green'}}>{app.dataStatus}</div>
                            <div className="datA">{app.dataDate}</div>
                            <div className='verify1'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M416.9 85.2L372 130.1L509.9 268L554.8 223.1C568.4 209.6 576 191.2 576 172C576 152.8 568.4 134.4 554.8 120.9L519.1 85.2C505.6 71.6 487.2 64 468 64C448.8 64 430.4 71.6 416.9 85.2zM338.1 164L122.9 379.1C112.2 389.8 104.4 403.2 100.3 417.8L64.9 545.6C62.6 553.9 64.9 562.9 71.1 569C77.3 575.1 86.2 577.5 94.5 575.2L222.3 539.7C236.9 535.6 250.2 527.9 261 517.1L476 301.9L338.1 164z" fill='#fff' stroke="#008EA8" stroke-width="30"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M232.7 69.9C237.1 56.8 249.3 48 263.1 48L377 48C390.8 48 403 56.8 407.4 69.9L416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L224 96L232.7 69.9zM128 208L512 208L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 208zM216 272C202.7 272 192 282.7 192 296L192 488C192 501.3 202.7 512 216 512C229.3 512 240 501.3 240 488L240 296C240 282.7 229.3 272 216 272zM320 272C306.7 272 296 282.7 296 296L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 296C344 282.7 333.3 272 320 272zM424 272C410.7 272 400 282.7 400 296L400 488C400 501.3 410.7 512 424 512C437.3 512 448 501.3 448 488L448 296C448 282.7 437.3 272 424 272z" fill='#fff' stroke="red" stroke-width="25"/></svg>
                            </div>
                            
                        </div>
                        ))}
                    </div>
                    </div>
                    </div>
                </div>
    )
}

export default Plans;