import React from "react";
import './admin.css';

const Upload = () =>{

    return(
        <div className="subscriptions">
            <div className="cableHolder">
            <div className='subtitle1'>
                <div className='heading'>File Upload Management</div>

                <div>
                    <div className="freebiecard1">
                        <div className="addbutton">
                        <div className="icon20"><svg className="addlogo" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" fill="#008EA8"/></svg></div>
                        </div>
                        <div className="plus">Upload File</div>
                        </div>
                </div>
            </div>

            <div className='scroll1'>
            <div className='scroll2'>
            <div className='firsttable'>
                <div className="secondtable">
                    <div className="size1">Name</div>
                    <div className="size1">Description</div>
                    <div className="size1">Version</div>
                    <div className="size1">Category</div>
                    <div className="size1">File</div>
                    <div className="size1">Actions</div>
                </div>

            <div className="movieUpload">No file added yet.</div>
            
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Upload;