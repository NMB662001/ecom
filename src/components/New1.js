import React from "react";
import './New1.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  FaEye, FaHeart, FaStar } from "react-icons/fa";
const New1= () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        color:'black'
    };
    return (
        <><div className="slider-container" >
            {/* <Slider {...settings} > */}
               <div style={{
                display:'flex',
                overflow:'scroll'
                
               }}> {
                    data.map((d) => (
                        <>
                                <ul type="none">
                                <li> <FaEye className="e" /><FaHeart className="h" /><img className="i" src={d.img} alt="" width='50%' border='1px solid gray' /></li>
                                <li className="line">{d.name}</li>
                                <li className="prize">{d.prize}</li>
                                <li><button className="b" >{d.btn}</button></li>
                                <li>{d.star}&nbsp;{d.num}</li>
                            </ul>
                        </>
                    ))}
                    </div>
            {/* </Slider> */}
        </div>
        <div>
<button className="button" onClick={() => {
    alert('View all products')
} }>View All Products</button>

</div>
        </>
    );
}
const data = [
    {
        img: '/img1.PNG',
        name: 'HAVIT HV-G92 Gamepad',
        prize: '$120   $160',
        btn: '-40%',
        num: '(88)',
        star: <><FaStar color="gold"/><FaStar color="gold" /><FaStar color="gold"/><FaStar color="gold"/><FaStar color="gold"/></>

    },
    {
        img: '/img2.PNG',
        name: 'AK-900 Wired Keyboard',
        prize: '$960   $1160',
        btn: '-35%',
        num: '(75)',
        star: <><FaStar color="gold"/><FaStar color="gold"/><FaStar color="gold"/><FaStar color="gold"/><FaStar color="gray"/></>


    },
    {
        img: '/img3.PNG',
        name: 'IPS LCD Gaming Monitor',
        prize: '$370 $400',
        btn: '-30%',
        num: '(99)',
        star: <><FaStar color="gold" /><FaStar color="gold"/><FaStar color="gold"/><FaStar color="gold" /><FaStar color="gold"/></>

    },
    {
        img: '/img4.PNG',
        name: 'S-Series Comfort Chair',
        prize: '$375  $400',
        btn: '-25%',
        num: '(99)',
        star: <><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold"/><FaStar color="gold" /><FaStar/></>
    },
    {
        img: '/img1.PNG',
        name: 'HAVIT HV-G92 Gamepad',
        prize: '$120   $160',
        btn: '-40%',
        num: '(88)',
        star: <><FaStar color="gold"/><FaStar color="gold" /><FaStar color="gold"/><FaStar color="gold" /><FaStar color="gold" /></>

    },
    {
        img: '/img4.PNG',
        name: 'S-Series Comfort Chair',
        prize: '$375  $400',
        btn: '-25%',
        num: '(99)',
        star: <><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar /></>
    }
]

export default New1
// import React from 'react'
// import './New1.css'
// import img1 from './image/img1.PNG'
// import img2 from './image/img2.PNG'
// import img3 from './image/img3.PNG'
// import img4 from './image/img4.PNG'
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// //  import "slick-carousel/slick/slick-theme.css";
// import {  FaEye, FaHeart, FaStar } from "react-icons/fa";
// import Carousel from 'react-bootstrap/Carousel';
// export const New1 = () => {
//     // const settings = {
//     //             dots: true,
//     //             infinite: true,
//     //             speed: 500,
//     //             slidesToShow: 3,
//     //             slidesToScroll: 3,
//     //             color:'black'
//     //         };
//     return(
//         <div className='main'>
//             {/* <Slider {...settings}> */}

//                 <Carousel>
//                     <section>
//                         <Carousel.Item>

//                             <div className="scroll">
//                                 <img className='image' src={img1} alt="img1" width='10%' border='1px solid gray' />
//                                 <FaHeart className="heart" />
//                                 <FaEye className="eye" />
//                                 <button className="btn">-40%</button>
//                                 <br />
//                                 <h5 className="h5">HAVIT HV-G92 Gamepad</h5>
//                                 <h5 className="h6">$120 &nbsp; $160</h5>
//                                 <p className="h6"> <FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" />&nbsp;(88)</p>
//                             </div>
//                         </Carousel.Item>

//                         <Carousel.Item>

//                             <div className="scroll1">
//                                 <img className='image1' src={img2} alt="img2" width='13.5%' border='1px solid gray' />
//                                 <FaHeart className="heart" />
//                                 <FaEye className="eye" />
//                                 <button className="btn1">-35%</button>
//                                 <br />
//                                 <h5 className="h1">AK-900 Wired Keyboard</h5>
//                                 <h5 className="h2">$960 &nbsp; $1160</h5>
//                                 <p className="h2"> <FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gray" />&nbsp;(75)</p>
//                             </div>
//                         </Carousel.Item>

//                         <Carousel.Item>

//                             <div className="scroll2">
//                                 <img className='image3' src={img3} alt="img3" width='18%' border='1px solid gray' />
//                                 <FaHeart className="heart" />
//                                 <FaEye className="eye" />
//                                 <button className="btn2">-30%</button>
//                                 <br />
//                                 <h5 className="h3">IPS LCD Gaming Monitor</h5>
//                                 <h5 className="h4">$370 &nbsp; $400</h5>
//                                 <p className="h4"> <FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" />&nbsp;(99)</p>
//                             </div>
//                         </Carousel.Item>

//                         <Carousel.Item>
//                             <div className="scroll3">

//                                 <img className='image4' src={img4} alt="img3" width='30%' border='1px solid gray' />
//                                 <FaHeart className="heart" />
//                                 <FaEye className="eye" />
//                                 <button className="btn3">-25%</button>
//                                 <br />
//                                 <h5 className="h7">S-Series Comfort Chair</h5>
//                                 <h5 className="h8">$375 &nbsp; $400</h5>
//                                 <p className="h8"> <FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" />&nbsp;(99)</p>

//                             </div>
//                         </Carousel.Item>
//                     </section>
//                     </Carousel>
//                     {/* </Slider> */}
            
       
//         <div>
//                 <button className="button" onClick={() => {
//                     alert('View all products')
//                 } }>View All Products</button>

//             </div>
//             </div>

//     )}
//     export default New1


  

  

 
