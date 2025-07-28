import React from 'react';
import './admin.css';

const User = () =>{

    const Card = [
        {cardName: 'Chinedu Okafor', cardEmail: 'chinedu@gmail.com', cardRole: 'Role: User', cardStatus: 'Active', cardView: 'View', cardBan: 'Ban' },
        {cardName: 'Grace Johnson', cardEmail: 'grace.j@gmail.com', cardRole: 'Role: User', cardStatus: 'Suspended', cardView: 'View', cardBan: 'Ban' },
        {cardName: 'Chinedu Okafor', cardEmail: 'chinedu@gmail.com', cardRole: 'Role: User', cardStatus: 'Active', cardView: 'View', cardBan: 'Ban' }

    ]

    return(
        <div>
        <div>         
            <form action="" className='formdett'>
            <div className='tabbutton'>
                
                <div className='formdet'>
                    <input type='text' placeholder='Search users...' />
                </div>
            
                <div className='tabBut'>Search</div>
                
            </div>
            </form>
            
        <div className='maincard'>
        {Card.map((app, id) =>(
        <div className='card' key={id}>
            <div className='surname'>{app.cardName}</div>
            <div className='address'>{app.cardEmail}</div>

            <div className='roller'>
                <div className='role'>{app.cardRole}</div>
                <div className='status' style={{color: app.cardStatus === 'Active' ? 'green' : app.cardStatus === 'Suspended' ? 'brown' : 'green'}}>{app.cardStatus}</div>
            </div>

            <div className='confirm'>
                <div className='state'>{app.cardView}</div>
                <div className='ban'>{app.cardBan}</div>
            </div>
        </div>
        ))}

        
        </div>
        </div>
        </div>
    )
}

export default User;