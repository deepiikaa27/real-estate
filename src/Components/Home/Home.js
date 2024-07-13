import React, { useState } from "react";
import "./Home.css";
import correct from "../../Assets/image 29.png";
import Login from "../Forms/Login";
import Secure from "../Forms/Secure";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState(1);

  const navigate = useNavigate();

  const loginhandler = () => {
    if (activeComponent == 1) {
      setActiveComponent(2);
      return;
    }
    if (activeComponent == 2) {
      setActiveComponent(3);
    }
    navigate("/list");
  };
  return (
    <div className="container">
      <div className="row px-0 text-white ">
        <div className="col-12 px-0 pt-5">
          <h2>Sell or Rent your Property For Free</h2>
          <p className="pt-2">
            Whether you’re ready to sell or looking for answers, we’ll guide you
            with data and expertise specific to your <br />
            needs.
          </p>
        </div>
        <div className="col-12">
          <div className="row mx-0">
            <div className="col-4 mt-5">
              <ul className="home-links ">
                <h4 className="mb-4">
                  Upload your property in 4 simple <br /> steps
                </h4>
                <li>
                  <img src={correct} />
                  Add your properties <span>Basic Details</span>
                </li>
                <li>
                  <img src={correct} />
                  Add property <span>Location</span>
                </li>
                <li>
                  <img src={correct} />
                  Add property <span>Features and amenities</span>
                </li>
                <li>
                  <img src={correct} />
                  Add <span>Price details</span>
                </li>
                <li>
                  <img src={correct} />
                  Add your best <span>Property Shots</span>
                </li>
              </ul>
            </div>
            <div className="col-6 ps-5 ms-4">
              <div className="login-form ">
                <div className="row mx-0 login-header">
                  <div className="col-10">
                    <h4>LETS GET YOU STARTED !</h4>
                  </div>
                </div>
                <div>{activeComponent === 1 ? <Login /> : <Secure />}</div>
                <div className="login-footer">
                  <small>
                    {" "}
                    Need Help? <span>Call 9999999999</span>{" "}
                  </small>
                  <button onClick={loginhandler}>NEXT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
