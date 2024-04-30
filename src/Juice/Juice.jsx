import React from "react";
import "./Juice.css";
import Juice1 from "../assets/juice1.jpg";
import Juice2 from "../assets/juice2.jpg";
import Juice3 from "../assets/juice3.jpg";
import Juice4 from "../assets/juice4.jpg";
import Juice5 from "../assets/juice5.jpg";

const Juice = () => {
  return (
    <>
      <div className="box">
        <div>
          <img src={Juice1} alt="Juice" className="Juice" />
          <p>
            Juice
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x20B9;50
          </p>
        </div>
        <div>
          <img src={Juice2} alt="Juice" className="Juice" />
          <p>
            Juice
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x20B9;50
          </p>
        </div>
        <div>
          <img src={Juice3} alt="Juice" className="Juice" />
          <p>
            Juice
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x20B9;50
          </p>
        </div>
        <div>
          <img src={Juice4} alt="Juice" className="Juice" />
          <p>
            Juice
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x20B9;50
          </p>
        </div>
        <div>
          <img src={Juice5} alt="Juice" className="Juice" />
          <p>
            Juice
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x20B9;50
          </p>
        </div>
      </div>
    </>
  );
};

export default Juice;
