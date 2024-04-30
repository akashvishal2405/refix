import React from 'react';
import './Shakes.css';
import Shakes1 from '../assets/shakes1.jpg';
import Shakes2 from '../assets/shakes2.jpg';
import Shakes3 from '../assets/shakes3.jpg';
import Shakes4 from '../assets/shakes4.jpg';
import Shakes5 from '../assets/shakes5.jpg';

const Shakes = () => {

  return (
    <>
         <div className="box">
            <div>
                <img src={Shakes1} alt="Shakes" className='Shakes'/>
                <p>Shakes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>
            <div>
                <img src={Shakes2} alt="Shakes" className='Shakes'/>
                <p>Shakes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>
            <div>
                <img src={Shakes3} alt="Shakes" className='Shakes'/>
                <p>Shakes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>
            <div>
                <img src={Shakes4} alt="Shakes" className='Shakes'/>
                <p>Shakes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>
            <div>
                <img src={Shakes5} alt="Shakes" className='Shakes'/>
                <p>Shakes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>

        </div>
    </>
  )
}

export default Shakes;