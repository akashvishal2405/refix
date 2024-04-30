import React from "react";
import "./Mojito.css";
import Mojito1 from '../assets/mojito1.jpg';
import Mojito2 from '../assets/mojito2.jpg';
import Mojito3 from '../assets/mojito3.jpg';
import Mojito4 from '../assets/mojito4.jpg';
import Mojito5 from '../assets/mojito5.jpg';

const Mojito = () => {
  return (
    <>
      <div className="box">
        <div>
          <img src={Mojito1} alt="Magi" className="Mojito" />
          <p>
          Mojito
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x20B9;70
          </p>
        </div>
        <div>
          <img src={Mojito2} alt="Magi" className="Mojito" />
          <p>
          Mojito
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x20B9;70
          </p>
        </div>
        <div>
          <img src={Mojito3} alt="Magi" className="Mojito" />
          <p>
          Mojito
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x20B9;70
          </p>
        </div>
        <div>
          <img src={Mojito4} alt="Magi" className="Mojito" />
          <p>
          Mojito
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x20B9;70
          </p>
        </div>
        <div>
          <img src={Mojito5} alt="Magi" className="Mojito" />
          <p>
          Mojito
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x20B9;70
          </p>
        </div>
      </div>
    </>
  );
};

export default Mojito;
