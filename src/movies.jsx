import React from "react";
import './admin.css';

const Movies = () =>{
    const movieDetails = [
        {movieUser: 'Kingsley O.', movieTitle: 'Avatar: Way of Water', movieCategory: 'Sci-Fi', moviePrice: '#2,500', movieImg: <svg width={40} height={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM404.4 276.7L324.4 404.7C320.2 411.4 313 415.6 305.1 416C297.2 416.4 289.6 412.8 284.9 406.4L236.9 342.4C228.9 331.8 231.1 316.8 241.7 308.8C252.3 300.8 267.3 303 275.3 313.6L302.3 349.6L363.7 251.3C370.7 240.1 385.5 236.6 396.8 243.7C408.1 250.8 411.5 265.5 404.4 276.8z" fill="green"/></svg>, movieStatus: 'Purchased', movieDate: '2025-08-20', movieAction: 'View'},
        {movieUser: 'Ada Peter', movieTitle: 'The Batman', movieCategory: 'Action', moviePrice: '#1,800', movieImg: <svg width={40} height={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M272 112C272 85.5 293.5 64 320 64C346.5 64 368 85.5 368 112C368 138.5 346.5 160 320 160C293.5 160 272 138.5 272 112zM272 528C272 501.5 293.5 480 320 480C346.5 480 368 501.5 368 528C368 554.5 346.5 576 320 576C293.5 576 272 554.5 272 528zM112 272C138.5 272 160 293.5 160 320C160 346.5 138.5 368 112 368C85.5 368 64 346.5 64 320C64 293.5 85.5 272 112 272zM480 320C480 293.5 501.5 272 528 272C554.5 272 576 293.5 576 320C576 346.5 554.5 368 528 368C501.5 368 480 346.5 480 320zM139 433.1C157.8 414.3 188.1 414.3 206.9 433.1C225.7 451.9 225.7 482.2 206.9 501C188.1 519.8 157.8 519.8 139 501C120.2 482.2 120.2 451.9 139 433.1zM139 139C157.8 120.2 188.1 120.2 206.9 139C225.7 157.8 225.7 188.1 206.9 206.9C188.1 225.7 157.8 225.7 139 206.9C120.2 188.1 120.2 157.8 139 139zM501 433.1C519.8 451.9 519.8 482.2 501 501C482.2 519.8 451.9 519.8 433.1 501C414.3 482.2 414.3 451.9 433.1 433.1C451.9 414.3 482.2 414.3 501 433.1z" fill="brown"/></svg>, movieStatus: 'Pending', movieDate: '2025-08-19', movieAction: 'Refund'},
        {movieUser: 'Chidi Anyanwu', movieTitle: 'Barbie', movieCategory: 'Comedy', moviePrice: '#2,000',  movieImg: <svg width={40} height={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" fill="red"/></svg>, movieStatus: 'Failed', movieDate: '2025-08-18', movieAction: 'Flag'},
        {movieUser: 'Onyema Charles', movieTitle: 'Tom & Jerry', movieCategory: 'Cartoon', moviePrice: '#1,500', movieImg: <svg width={40} height={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM404.4 276.7L324.4 404.7C320.2 411.4 313 415.6 305.1 416C297.2 416.4 289.6 412.8 284.9 406.4L236.9 342.4C228.9 331.8 231.1 316.8 241.7 308.8C252.3 300.8 267.3 303 275.3 313.6L302.3 349.6L363.7 251.3C370.7 240.1 385.5 236.6 396.8 243.7C408.1 250.8 411.5 265.5 404.4 276.8z" fill="green"/></svg>, movieStatus: 'Purchased', movieDate: '2025-08-17', movieAction: 'View'}
    ]

    return(
        <div className="subscriptions">
            <div className='subtitle'>
            <div className='heading'>Movies</div>
        </div>  

        <div className="electSearch">
                <form action="" className='formdett'>
            <div className='tabbutton'>
                
                <div className='formDetail'>
                    <input type='text' placeholder='Search users...' />
                </div>
            
                <div className='tabBut'>Search</div>
                
            </div >
            </form>

            <div className="electSelect">
            <select name="text" id="" className="selectopt">
                <option value="">Provider</option>
                <option value="">Provider1</option>
            </select>
           

            
            <select name="text" id="" className="selectopt">
                <option value="">Status</option>
                <option value="">Status1</option>
            </select>
            </div>
            
            </div>

            <div className='scroll1'>
            <div className='scroll2'>
            <div className='firsttable'>
                <div className="secondtable">
                    <div className="size1">User</div>
                    <div className="size1">Movie Title</div>
                    <div className="size1">Catgory</div>
                    <div className="size1">Price</div>
                    <div className="size1">Status</div>
                    <div className="size1">Date</div>
                    <div className="size1">Actions</div>
                </div>

            {movieDetails.map((app,id) =>(
                <div className="thirdtable" key={id}>
                    <div className="datA">{app.movieUser}</div>
                    <div className="datA">{app.movieTitle}</div>
                    <div className="datA">{app.movieCategory}</div>
                    <div className="datA">{app.moviePrice}</div>
                    <div className="paidlogo">
                        <div className="">{app.movieImg}</div>
                    <div className="datA" style={{color: app.movieStatus === 'Purchased' ? 'green' : app.movieStatus === 'Pending' ? 'brown' : app.movieStatus ==='Failed' ? 'red' : 'green'}}>{app.movieStatus}</div>
                    </div>
                    <div className="datA">{app.movieDate}</div>
                    <div className="datA">{app.movieAction}</div>
                </div>
                ))}
            </div>
            </div>
            </div>
        </div>
    )
}

export default Movies;