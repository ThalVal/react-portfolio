import React from 'react';

import "../style/About.css"
import icon from "../style/imgs/icon.jpg"

export default function About () {
   

    return (
     
        <div className="main">
          
            <div className="Title">
                <h2>About Me</h2> 
                
            </div>
            
            <div className="excerpt">
              
              <p> </p>
              <br></br>
              <p> </p>
              <div className="pic">
            <img src = {icon}></img>
            </div>
            </div>
         
            
          
      </div>
    );
  }