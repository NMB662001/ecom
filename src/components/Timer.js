import React from "react";
import './Timer.css'
import  New1  from "./New1";
const Timer=()=>
{
    return(
        <>
        
        <div className="v2"></div>
        <div className="l1">Today's</div>
        <div >
            <p className="days"> Days &nbsp;   &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; Hours  &nbsp; &nbsp;  &nbsp;   &nbsp; &nbsp;  Minutes &nbsp;   &nbsp; &nbsp;   &nbsp; Seconds</p>
            <h1 className="time">03 : 23 :  19 : 56</h1>
        </div>
        <p className="fs">Flash Sales</p>
        <div>
            <section>
            <New1/>

            </section>
        </div>
        </>
    )
}
export default Timer