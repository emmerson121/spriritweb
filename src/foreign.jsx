import React from 'react';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import internet from './img/internet.png';
import Page from './Pagination/page';
import loading from './img/loading.png'

const Foreign = () => {
    const foreNumbers = [
        {foreignType: 'Total Volume', foreignValue: '4,100', foreignImg: <div className='foreicon4'><svg width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M19 7V4C19 3.73478 18.8946 3.48043 18.7071 3.29289C18.5196 3.10536 18.2652 3 18 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5C3 5.53043 3.21071 6.03914 3.58579 6.41421C3.96086 6.78929 4.46957 7 5 7H20C20.2652 7 20.5196 7.10536 20.7071 7.29289C20.8946 7.48043 21 7.73478 21 8V12M21 12H18C17.4696 12 16.9609 12.2107 16.5858 12.5858C16.2107 12.9609 16 13.4696 16 14C16 14.5304 16.2107 15.0391 16.5858 15.4142C16.9609 15.7893 17.4696 16 18 16H21C21.2652 16 21.5196 15.8946 21.7071 15.7071C21.8946 15.5196 22 15.2652 22 15V13C22 12.7348 21.8946 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12Z" stroke="#008EA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V16" stroke="#008EA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>},
{foreignType: 'Successful Rate', foreignValue: '75%', foreignImg: <div className='foreicon5'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM438 209.7C427.3 201.9 412.3 204.3 404.5 215L285.1 379.2L233 327.1C223.6 317.7 208.4 317.7 199.1 327.1C189.8 336.5 189.7 351.7 199.1 361L271.1 433C276.1 438 282.9 440.5 289.9 440C296.9 439.5 303.3 435.9 307.4 430.2L443.3 243.2C451.1 232.5 448.7 217.5 438 209.7z" fill="#008EA8" stroke-width="2" /></svg>
</div>},
{foreignType: 'Failed', foreignValue: '1', foreignImg: <div className='foreicon5'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM231 231C240.4 221.6 255.6 221.6 264.9 231L319.9 286L374.9 231C384.3 221.6 399.5 221.6 408.8 231C418.1 240.4 418.2 255.6 408.8 264.9L353.8 319.9L408.8 374.9C418.2 384.3 418.2 399.5 408.8 408.8C399.4 418.1 384.2 418.2 374.9 408.8L319.9 353.8L264.9 408.8C255.5 418.2 240.3 418.2 231 408.8C221.7 399.4 221.6 384.2 231 374.9L286 319.9L231 264.9C221.6 255.5 221.6 240.3 231 231z" fill='#008EA8'/></svg>
</div>},
{foreignType: 'Refunded', foreignValue: '0', foreignImg: <div className='foreicon5'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M129.9 292.5C143.2 199.5 223.3 128 320 128C373 128 421 149.5 455.8 184.2C456 184.4 456.2 184.6 456.4 184.8L464 192L416.1 192C398.4 192 384.1 206.3 384.1 224C384.1 241.7 398.4 256 416.1 256L544.1 256C561.8 256 576.1 241.7 576.1 224L576.1 96C576.1 78.3 561.8 64 544.1 64C526.4 64 512.1 78.3 512.1 96L512.1 149.4L500.8 138.7C454.5 92.6 390.5 64 320 64C191 64 84.3 159.4 66.6 283.5C64.1 301 76.2 317.2 93.7 319.7C111.2 322.2 127.4 310 129.9 292.6zM573.4 356.5C575.9 339 563.7 322.8 546.3 320.3C528.9 317.8 512.6 330 510.1 347.4C496.8 440.4 416.7 511.9 320 511.9C267 511.9 219 490.4 184.2 455.7C184 455.5 183.8 455.3 183.6 455.1L176 447.9L223.9 447.9C241.6 447.9 255.9 433.6 255.9 415.9C255.9 398.2 241.6 383.9 223.9 383.9L96 384C87.5 384 79.3 387.4 73.3 393.5C67.3 399.6 63.9 407.7 64 416.3L65 543.3C65.1 561 79.6 575.2 97.3 575C115 574.8 129.2 560.4 129 542.7L128.6 491.2L139.3 501.3C185.6 547.4 249.5 576 320 576C449 576 555.7 480.6 573.4 356.5z" fill='#008EA8'/></svg>
</div>}
    ] 

    const foreTransactions = [
        {foreId: '1', foreCode: 'DE', foreCountry: 'Germany', foreSymbol: <img className='foreimage' src={internet} alt="" />, foreProvider: '5SIM', foreAmount: 'EUR 1,400', foreImg1: <svg width={40} height={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM404.4 276.7L324.4 404.7C320.2 411.4 313 415.6 305.1 416C297.2 416.4 289.6 412.8 284.9 406.4L236.9 342.4C228.9 331.8 231.1 316.8 241.7 308.8C252.3 300.8 267.3 303 275.3 313.6L302.3 349.6L363.7 251.3C370.7 240.1 385.5 236.6 396.8 243.7C408.1 250.8 411.5 265.5 404.4 276.8z" fill="green"/></svg>, foreStatus: 'Success', foreChannel: 'Paystack', foreDate: '2025-09-27', foreTime: '04:09:57'},
        {foreId: '2', foreCode: 'GH', foreCountry: 'Ghana', foreSymbol: <img className='foreimage' src={internet} alt="" />, foreProvider: 'OTPHub', foreAmount: 'GHS 2,000', foreImg1: <div className='loadingImg'><img className='loadingImg1' src={loading} /></div>, foreStatus: 'Pending', foreChannel: 'Flutterwave', foreDate: '2025-09-03', foreTime: '09:12:30'},
        {foreId: '3', foreCode: 'NG', foreCountry: 'Nigeria', foreSymbol: <img className='foreimage' src={internet} alt="" />, foreProvider: '5SIM', foreAmount: 'EUR 1,400', foreImg1: <svg width={40} height={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" fill="red"/></svg>, foreStatus: 'Failed', foreChannel: 'Paystack', foreDate: '2025-06-27', foreTime: '06:47:32'},
        {foreId: '4', foreCode: 'US', foreCountry: 'U.S.A', foreSymbol: <img className='foreimage' src={internet} alt="" />, foreProvider: '5SIM', foreAmount: '$ 4,500', foreImg1: <svg width={40} height={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM404.4 276.7L324.4 404.7C320.2 411.4 313 415.6 305.1 416C297.2 416.4 289.6 412.8 284.9 406.4L236.9 342.4C228.9 331.8 231.1 316.8 241.7 308.8C252.3 300.8 267.3 303 275.3 313.6L302.3 349.6L363.7 251.3C370.7 240.1 385.5 236.6 396.8 243.7C408.1 250.8 411.5 265.5 404.4 276.8z" fill="green"/></svg>, foreStatus: 'Success', foreChannel: 'Paystack', foreDate: '2025-06-12', foreTime: '11:00:57'}
    ]
    return(
        <div className='subscriptions'>
            <div className='subtitle1'>
                <div className='heading'>Foreign Numbers</div>

                <div className="">
                    <a className="foreignIcon" href="">
                    <div className='foreicon6'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M129.9 292.5C143.2 199.5 223.3 128 320 128C373 128 421 149.5 455.8 184.2C456 184.4 456.2 184.6 456.4 184.8L464 192L416.1 192C398.4 192 384.1 206.3 384.1 224C384.1 241.7 398.4 256 416.1 256L544.1 256C561.8 256 576.1 241.7 576.1 224L576.1 96C576.1 78.3 561.8 64 544.1 64C526.4 64 512.1 78.3 512.1 96L512.1 149.4L500.8 138.7C454.5 92.6 390.5 64 320 64C191 64 84.3 159.4 66.6 283.5C64.1 301 76.2 317.2 93.7 319.7C111.2 322.2 127.4 310 129.9 292.6zM573.4 356.5C575.9 339 563.7 322.8 546.3 320.3C528.9 317.8 512.6 330 510.1 347.4C496.8 440.4 416.7 511.9 320 511.9C267 511.9 219 490.4 184.2 455.7C184 455.5 183.8 455.3 183.6 455.1L176 447.9L223.9 447.9C241.6 447.9 255.9 433.6 255.9 415.9C255.9 398.2 241.6 383.9 223.9 383.9L96 384C87.5 384 79.3 387.4 73.3 393.5C67.3 399.6 63.9 407.7 64 416.3L65 543.3C65.1 561 79.6 575.2 97.3 575C115 574.8 129.2 560.4 129 542.7L128.6 491.2L139.3 501.3C185.6 547.4 249.5 576 320 576C449 576 555.7 480.6 573.4 356.5z" fill='#008EA8'/></svg>
</div>
                    <div className="forerefresh">Refresh</div>
                    </a>
                </div>
            </div>

            
                <div className='foreview'>
                    {foreNumbers.map((app,id) => (
                        <div className='foreHolder' key={id}>
                        <div className='forerefA'>{app.foreignType}</div>
                        <div className='foredisplay'>
                        <div className='foreref1'>{app.foreignValue}</div>
                    

                    <div>{app.foreignImg}</div>
                    </div>
                    </div>

                     ))}

                </div>
            
            <div className='foreSection'>
            <div className='todayView'>
                <div className='todayCover'>Today</div>
                <div className='todayCover1'>Last 7 days</div>
                <div className='todayCover2'>Last 30 days</div>
                <div className='todayCover3'>All</div>
            </div>

            <div className='searchContainer'>
                <div className='search-container'>
                    <div className='search-icon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" fill='#707070'/></svg></div>
                    <input type="text" placeholder='Search by ID, email, phone or external ref...'/>
                </div>
                <div className='search-container1'>
                    <input type="text" placeholder='Advanced' />
                </div>
            </div>

            <div className='foreOptions1'>
                <select name="" id="" className='foreOptions'>
                    <option value="">All status</option>
                </select>

                <select name="" id="" className='foreOptions'>
                    <option value="">All channels</option>
                </select>

                <select name="" id="" className='foreOptions'>
                    <option value="">All providers</option>
                </select>

                <select name="" id="" className='foreOptions'>
                    <option value="">All countries</option>
                </select>
            </div>

            <div className='foreOptions2'>
                <select name="" id="" className='foreOptions'>
                    <option value="">03/09/2025</option>
                </select>

                <div className='foreTo'>to</div>

                <select name="" id="" className='foreOptions'>
                    <option value="">04/09/2025</option>
                </select>
            </div>

            <div className='foreignNum'>
                <div className='foreOptions3'>
                    <input type="text" placeholder='Min Amount' />
                </div>

                <div className='foreOptions4'>
                    <input type="text" placeholder='Max amount' />
                </div>
            </div>

            <div className='forereset'>
                <div className='foreReset'>Reset</div>
                <div className='foreApply'>Apply</div>
            </div>
            </div>

            <div className='forescroll1'>
            <div className='forescroll2'>
            <div className='firsttable'>
                <div className="secondtable">
                    <div className="size1">ID</div>
                    <div className="size1">Country</div>
                    <div className="size1">Provider</div>
                    <div className="size1">Amount</div>
                    <div className="size1">Status</div>
                    <div className="size1">Channel</div>
                    <div className="size1">Date created</div>
                </div>

            {foreTransactions.map((app,id) =>(
                <div className="thirdtable" key={id}>
                    <div className="datA">{app.foreId}</div>
                    <div className='forecountry'>
                    <div className='forecircle'>{app.foreCode}</div>
                    <div className="status2">{app.foreCountry}</div>
                    </div>
                    <div className='symbolShow'>
                    <div className="foreimage1">{app.foreSymbol}</div>
                    <div className="size1">{app.foreProvider}</div>
                    </div>
                    <div className="datA">{app.foreAmount}</div>
                    <div className="paidlogo">
                        <div className="">{app.foreImg1}</div>
                    <div className="status2" style={{color: app.foreStatus === 'Success' ? 'green' : app.foreStatus === 'Pending' ? 'brown' : app.foreStatus ==='Failed' ? 'red' : 'green'}}>{app.foreStatus}</div>
                    </div>
                    <div className="datA">{app.foreChannel}</div>
                    <div className="timestamp">
                            <div className="size2">{app.foreDate}</div>
                            <div className="size2">{app.foreTime}</div>
                    </div>
                </div>
                ))}
            </div>
            </div>
            </div>

            <Page />          
        </div>
    )
}

export default Foreign;