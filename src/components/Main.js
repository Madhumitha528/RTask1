import React, { useEffect, useState } from 'react';
import './Main.css';
import grpimage from "../images/grpimage.png"
import ticketimg from "../images/ticket.png"

export default function Main() {
    const [day,setDay]=useState("");
    useEffect(()=>
    {
        const hours = new Date().getHours();
        if (hours < 12) {
            setDay('Morning');
        } else if (hours < 18) {
            setDay(' Afternoon');
        } else {
            setDay('Evening');
        }
    },[])
    return (
        
        <>
            <div className="  text-start mx-5 px-5">
                <p className="h5 "style={{fontFamily: 'Nunito, sans-serif', fontWeight: 800}} >Good {day} , Yuvan</p>
                <p style={{fontFamily: 'Nunito, sans-serif'} }>Complete weekly assessment to win reward points.</p>
            </div>

            <div className="container my-2 bg-light py-3 style={{width:'1240px',height:'345px'}}">
                <div className="row">
                    <div className="col-5 text-start">
                        <div className="h4">Practice portal</div>
                        <div className="display-10">
                            Train yourself to enhance your math skills <br /> but you can only practice twice a day.
                        </div>
                        <br>
                        </br>
                        <br></br>
                        <div>Earn a ticket by completing 5 practice assessments in 5 days</div>
                        {/* <center><button  >Practice now</button></center> */}
                        <button className="btn  w-100" style={{  backgroundColor: 'rgba(148, 104, 202, 1)' }}>Practice now</button>
                        
                    </div>
                    <div className="col-2 d-flex align-items-center" security=''>
                        <div className="vertical-line"></div>
                    </div>
                    <>
                    <div className="col bg-warning text-start p-0 " style={{ width: '561px', height: '90px'} } >
                        <img className="px-0" src={grpimage} alt='groupimage'></img>
                        {/* //552 98 */}
                        <img src={ticketimg}  alt='points' className='px-5 py-0'/>
                    <div className='h6 py-0 my-0' style={{width: '229px',height: '24px',top: '155px',left: '653px',gap: '0px',opacity: '0px',fontFamily: 'Nunito, sans-serif',
fontSize: '24px',
fontweight: 700
}}>Weekly assessment</div>
                    <div className="display-10 ">Train yourself to compete with your mates, earn your spot in <br></br>leaderboard by participating in weekly assessment</div>
                    <button className="btn  w-100" style={{ backgroundColor: 'rgba(190, 191, 194, 1)'}}>X 1 to take assessment</button>

                    </div>
                    </>
                    
                </div>
            </div>
        </>
    );
}
 