import React from "react";
import logo from './logo.jpg'

function Profile()
{
    return (
        <div>
            <div className="Img">
                <img src={logo} alt="Logo" />
            </div>
            <div className="empdetails">
                    <ol>
                        <li>ID:1</li> <br />
                        <li>Name of the Employee:- Just Neel Things</li> <br />
                        <li>Contact No:-9087654321</li> <br />
                        <li>Address:ABC,Thane</li> <br />
                        <li>Email Address:-neel@gmail.com</li> <br />
                        <li>Experience:1.5 year</li>  <br />
                        <li>Expertise:Python,React,NodeJS</li>   <br />
                    </ol>
                
            </div>
            
        </div>
    );
}

export default Profile;