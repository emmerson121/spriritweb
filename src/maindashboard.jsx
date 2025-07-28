import React from "react";
import './admin.css';
import Admin from "./admindashboard";
import AdminOverview from "./adminoverview";
import User from "./alluser";

const Dashboard1 = () =>{

    return(
        <div>
           <div style={{display: 'flex'}}>
      <div style={{width: '25%'}}>
      <Admin />
      </div>

      <div>
      <AdminOverview />
      {/* <User /> */}
      </div>
      </div> 
        </div>
    )
}

export default Dashboard1;