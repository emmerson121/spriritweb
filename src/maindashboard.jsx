import React from "react";
import './admin.css';
import Admin from "./admindashboard";
import AdminOverview from "./adminoverview";
import User from "./alluser";

const Dashboard1 = () =>{

    return(
        <div>
           <div className="">
      <div className="">
      <Admin />
      </div>

      <div className="">
      <AdminOverview />
      <User />
      {/* <User /> */}
      </div>
      </div> 
        </div>
    )
}

export default Dashboard1;