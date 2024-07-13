import React, { useContext, useState } from "react";
import "./list.css";
import Details from "../Forms/Details";
import Feature from "../Forms/Feature";
import Price from "../Forms/Price";
import UploadPhotos from "../Forms/UploadPhotos";
import Submit from "../Forms/Submit";
import Location from "../Forms/Location";
import { useNavigate } from "react-router-dom";
import Preview from "../Preview/Preview";
import FormDataContext from "../../context/FormDataContext";

const List = ({ floor, totalFloor, area }) => {
  const [activeForm, setActiveForm] = useState("A");

  const navigate = useNavigate();

  const handleSubmit = () => {
    toggleComponent();
  };

  const renderComponent = () => {
    switch (activeForm) {
      case "A":
        return <Details />;
      case "B":
        return <Location />;
      case "C":
        return <Feature />;
      case "D":
        return <Price />;
      case "E":
        return <UploadPhotos />;
      case "F":
        navigate("/submit");
    }
  };
  const toggleComponent = () => {
    setActiveForm((prevComponent) => {
      switch (prevComponent) {
        case "A":
          return "B";
        case "B":
          return "C";
        case "C":
          return "D";
        case "D":
          return "E";
        case "E":
          return "F";
      }
    });
  };
  return (
    <div
      className=" bg-white row mx-0 d-flex justify-content-center "
      style={{ height: "89vh" }}
    >
      <div className="col-8">
        <div className="listing-form mt-5">
          <div className="listing-header row mx-0 text-center">
            <div className="col">PROPERTY DETAILS</div>
            <div className="col">LOCATION DETAILS</div>
            <div className="col">FEATURES & AMENITIES</div>
            <div className="col">PRICE DETAILS</div>
            <div className="col">PROPERTY IMAGES</div>
          </div>
          <div>{renderComponent()}</div>
          <div className="detail-footer">
            <small>Need Help? Call 9999999999</small>
            <button onClick={handleSubmit}>NEXT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
