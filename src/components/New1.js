import React from 'react'
import './New1.css'
import img1 from './image/img1.PNG'
import img2 from './image/img2.PNG'
import img3 from './image/img3.PNG'
import img4 from './image/img4.PNG'
import {  FaEye, FaHeart, FaStar } from "react-icons/fa";
export const New1 = () => {
    return(
        <div className='main'>
        
        <section>
            <div className="scroll">
<img className='image'src={img1} alt="img1"  width='10%' border='1px solid gray'/>
<FaHeart className="heart"/>
<FaEye className="eye"/>
<button className="btn">-40%</button>
<br/>
<h5 className="h5">HAVIT HV-G92 Gamepad</h5>
<h5 className="h6">$120 &nbsp; $160</h5>
<p className="h6"> <FaStar color="gold"/><FaStar color="gold"/><FaStar color="gold"/><FaStar color="gold"/><FaStar color="gold"/>&nbsp;(88)</p>

            </div>
            <div className="scroll1">
<img className='image1'src={img2} alt="img2"  width='13.5%'  border='1px solid gray'/>
<FaHeart className="heart"/>
<FaEye className="eye"/>
<button className="btn1">-35%</button>
<br/>
<h5 className="h1">AK-900 Wired Keyboard</h5>
<h5 className="h2">$960 &nbsp; $1160</h5>
<p className="h2"> <FaStar color="gold"/><FaStar color="gold"/><FaStar color="gold"/><FaStar color="gold"/><FaStar color="gray"/>&nbsp;(75)</p>

            </div>
            <div className="scroll2">
<img className='image3'src={img3} alt="img3"  width='18%' border='1px solid gray'/>
<FaHeart className="heart"/>
<FaEye className="eye"/>
<button className="btn2">-30%</button>
<br/>
<h5 className="h3">IPS LCD Gaming Monitor</h5>
<h5 className="h4" >$370 &nbsp; $400</h5>
<p className="h4"> <FaStar color="gold"/><FaStar color="gold"/><FaStar color="gold"/><FaStar color="gold"/><FaStar color="gold"/>&nbsp;(99)</p>

            </div>
             <div className="scroll3">
<img className='image4'src={img4} alt="img3" width='30%'  border='1px solid gray'/>
<FaHeart className="heart"/>
<FaEye className="eye"/>
<button className="btn3">-25%</button>
<br/>
<h5 className="h7">S-Series Comfort Chair</h5>
<h5 className="h8" >$375 &nbsp; $400</h5>
<p className="h8"> <FaStar color="gold"/><FaStar color="gold"/><FaStar color="gold"/><FaStar color="gold"/><FaStar color="gold"/>&nbsp;(99)</p>

            </div> 
            </section>
            <div>
            <button className="button" onClick={()=>{
                alert('View all products')
            }}>View All Products</button>

            </div>
            </div>

    )}
    export default New1

 
  

  

 
