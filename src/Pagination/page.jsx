import React from 'react';
import './page.css';

const Page = () =>{

    return(
        <div className="butMenu">
                <button className="nextButton">Previous</button>
                <ul className="buttonContainer">
                    <li className="selectbutton">1</li>
                    <li className="selectbutton">2</li>
                    <li className="selectbutton">3</li>
                    {/* <li className="selectbutton">4</li>
                    <li className="selectbutton">5</li> */}
                </ul>
                <button className="prevButton">Next</button>
            </div>
    )
}

export default Page;