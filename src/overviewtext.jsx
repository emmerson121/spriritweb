import React from "react";
import "./styling.css"

const OverviewText = () => {

    return(
        <div className="viewtext">
            <div className="viewtext1">
                <div className='shell1'>
                <div className='shell2'>
                    <div className='shellA'>
                        <div className='dataB'>Service</div>
                        <div className='dataB'>Country</div>
                        <div className='dataB'>Phone</div>
                        <div className='dataB'>Amount</div>
                        <div className='dataB'>Date</div>
                        <div className='dataB data3'>Status</div>
                    </div>

                <div className='shellB'>
                    <div className='shellC'>
                        <div className='dataB'>WhatsApp</div>
                        <div className='dataB'>Germany</div>
                        <div className='dataB'>+49 3012345678</div>
                        <div className='dataB'>€40</div>
                        <div className='dataB'>14th Feb, 2024</div>
                        <div className='dataB dataC'><span className='status1'>completed</span></div> 
                    </div>

                    <div className='shellC'>
                        <div className='dataB'>Telegram</div>
                        <div className='dataB'>Nigeria</div>
                        <div className='dataB'>+234 8102349876</div>
                        <div className='dataB'>#4,530</div>
                        <div className='dataB'>19th Feb, 2024</div>
                        <div className='dataB dataC'><span className='status2'>processing</span></div> 
                    </div>

                <div className='shellC'>
                        <div className='dataB'>Movies App</div>
                        <div className='dataB'>USA</div>
                        <div className='dataB'>+1 2125551234</div>
                        <div className='dataB'>$42</div>
                        <div className='dataB'>28th Feb, 2024</div>
                        <div className='dataB dataC'><span className='status1'>completed</span></div> 
                    </div>
                    
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewText