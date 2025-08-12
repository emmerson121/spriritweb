import React from "react";
import './admin.css';

const Roles = () =>{
    const management = [
        {manageAdmin: ' Super Admin', managePerm: 'Permissions: All Access'},
        {manageAdmin: ' Support Staff', managePerm: 'Permissions: Messages & Support, Users'},
        {manageAdmin: ' Finance', managePerm: 'Permissions: Transactions, System Logs'}

    ]
    return(
        <div className="manageRole">
            <div className="heading">Admin Roles Management</div>
        
            <div className="roleContainer">
                <div className="roleDetails">
                    <div className="roleDetails1">
                    <div className="rolename">Role name</div>
                    <input type="text" placeholder="e.g. Marketing..." />
                </div>

                <div className="roleDetails1">
                    <div className="rolename">Permissions</div>
                    <input type="text" placeholder="e.g. Orders, Purchases, ..." />
                </div>
                </div>

                <div className="addDetail">Add Role</div>
            </div>
        
        {management.map((app,id) => (
        <div className="roleContainer" key={id}>
            <div className="roleDetails1">
            <div className="super">{app.manageAdmin}</div>
            <div className="allAccess">{app.managePerm}</div>
            
            </div>
        </div>
        ))}

        </div>
    )
}

export default Roles;