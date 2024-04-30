import React from 'react';
import './Sandwich.css';
import Sandwich1 from '../assets/sandwich1.jpg';
import Sandwich2 from '../assets/sandwich2.jpg';
import Sandwich3 from '../assets/sandwich3.jpg';
import Sandwich4 from '../assets/sandwich4.jpg';
import Sandwich5 from '../assets/sandwich5.jpg';

const Sandwich = () => {
  return (
    <>
     <div className="box">
            <div>
                <img src={Sandwich1} alt="Sandwich" className='Sandwich'/>
                <p>Sandwich &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;50</p>
            </div>
            <div>
                <img src={Sandwich2} alt="Sandwich" className='Sandwich'/>
                <p>Sandwich &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;50</p>
            </div>
            <div>
                <img src={Sandwich3} alt="Sandwich" className='Sandwich'/>
                <p>Sandwich &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;50</p>
            </div>
            <div>
                <img src={Sandwich4} alt="Sandwich" className='Sandwich'/>
                <p>Sandwich &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;50</p>
            </div>
            <div>
                <img src={Sandwich5} alt="Sandwich" className='Sandwich'/>
                <p>Sandwich &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;50</p>
            </div>

        </div>
    </>
  )
}

export default Sandwich