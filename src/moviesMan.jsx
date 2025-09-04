import React from "react";
import './admin.css';

const ManageMovie = () =>{

    return(
        <div className="subscriptions">
            <div className="cableHolder">
            <div className='subtitle1'>
                <div className='heading'>Movie Content Management</div>

                <div>
                    <div className="freebiecard1">
                        <div className="addbutton">
                        <div className="icon20"><svg className="addlogo" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" fill="#008EA8"/></svg></div>
                        </div>
                        <div className="plus">Add Movie</div>
                        </div>
                </div>
            </div>

            <div className='scroll1'>
            <div className='scroll2'>
            <div className='firsttable'>
                <div className="secondtable">
                    <div className="size1">Title</div>
                    <div className="size1">Description</div>
                    <div className="size1">Release Year</div>
                    <div className="size1">Genre</div>
                    <div className="size1">Actions</div>
                </div>

            <div className="movieUpload">No movies added yet.</div>
            
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default ManageMovie;