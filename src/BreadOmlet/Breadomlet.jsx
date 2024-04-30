import React from 'react';
import './Breadomlet.css';
import Bread1 from '../assets/bread1.jpg';
import Bread2 from '../assets/bread2.jpg';
import Bread3 from '../assets/bread3.jpg';
import Bread4 from '../assets/bread4.jpg';
import Bread5 from '../assets/bread5.jpg';

const Breadomlet = () => {
  return (
    <>
        <div className="box">
            <div>
                <img src={Bread1} alt="BreadOmlet" className='breadOmlet'/>
                <p>Bread Omlet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;50</p>
            </div>
            <div>
                <img src={Bread2} alt="BreadOmlet" className='breadOmlet'/>
                <p>Bread Omlet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;50</p>
            </div>
            <div>
                <img src={Bread3} alt="BreadOmlet" className='breadOmlet'/>
                <p>Bread Omlet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;50</p>
            </div>
            <div>
                <img src={Bread4} alt="BreadOmlet" className='breadOmlet'/>
                <p>Bread Omlet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;50</p>
            </div>
            <div>
                <img src={Bread5} alt="BreadOmlet" className='breadOmlet'/>
                <p>Bread Omlet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;50</p>
            </div>

        </div>
        
    </>
  )
}

export default Breadomlet