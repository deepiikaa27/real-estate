import React, { useContext } from "react";
import FormDataContext from "../../context/FormDataContext";
import "./forms.css";

const Location = () => {
  const { setDetails } = useContext(FormDataContext);
  return (
    <div className="form-dody details-body px-5 pt-3">
      <div className="row mx-0 text-input ">
        <div className="col-6">
          <div>
            Building/ Society Name <span>*</span>
          </div>

          <select></select>
        </div>
        <div className="col-6">
          <div>
            Locality / Area<span>*</span>
          </div>

          <input type="text" />
        </div>
      </div>
      <div className="row mx-0 text-input">
        <div className="col-6">
          <div>Landmark / Street Name</div>

          <input type="text" />
        </div>
        <div className="col-6">
          <div>City</div>

          <input type="text" />
        </div>
      </div>
      <div>
        <div className="fw-bold ps-2 mt-3">Mark Locality on Map</div>
      </div>
    </div>
  );
};

export default Location;
