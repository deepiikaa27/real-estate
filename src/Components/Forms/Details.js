import React, { useContext, useState } from "react";
import "./forms.css";
import FormDataContext from "../../context/FormDataContext";

const Details = () => {
  const { setDetails } = useContext(FormDataContext);

  return (
    <div className="form-body details-body px-5 pt-3">
      <div className="">
        <div className="">
          <span>*</span>Property for:
        </div>
        <div className="row mx-0">
          <div className="col-4">
            <input type="radio" />
            <label className="ms-2">Rent</label>
          </div>
          <div className="col-4">
            <input type="radio" />
            <label className="ms-2">Sale</label>
          </div>
        </div>
      </div>
      <div>
        <div>
          <span>*</span>Property Type:
        </div>
        <div className="row mx-0">
          <div className="col-4">
            {" "}
            <input type="radio" />
            <label className="ms-2">Resdential</label>
          </div>
          <div className="col-4">
            <input type="radio" />
            <label className="ms-2">Commercial</label>
          </div>
          <div className="col-4">
            {" "}
            <input type="radio" />
            <label className="ms-2">Land/Plot</label>
          </div>
        </div>
      </div>
      <div className="row mx-0 text-input">
        <div className="col-6">
          <div>
            Build Up Area<span>*</span>
          </div>
          <input
            type="text"
            placeholder="0"
            onChange={(e) => setDetails({ area: e.target.value })}
          />
        </div>
        <div className="col-6">
          <div>
            Carpet Area <span>*</span>{" "}
          </div>
          <input type="text" placeholder="0" />
        </div>
      </div>
      <div className="row mx-0 text-input">
        <div className="col-3">
          <div>
            Property on Floor<span>*</span>
          </div>
          <input
            type="text"
            placeholder="Floor"
            onChange={(e) => setDetails({ floor: e.target.value })}
          />
        </div>
        <div className="col-3">
          <div>
            Total Floors<span>*</span>{" "}
          </div>
          <input
            type="text"
            placeholder="Total Floor"
            onChange={(e) => setDetails({ totalfloor: e.target.value })}
          />
        </div>
        <div className="col-6">
          <div>
            Property Facing<span>*</span>{" "}
          </div>
          <select>
            <option>North</option>
          </select>
        </div>
      </div>
      <div className="row mx-0">
        <div>
          Property Age <span>*</span>
        </div>
        <div className="d-flex justify-content-between div-border">
          <div>Less than 1 Year</div>
          <div>1- 3 Years</div>
          <div>3- 5 Years</div>
          <div>5 - 10 Years</div>
          <div>Greater than 10 Years</div>
        </div>
      </div>
      <div className="row mx-0">
        <div>
          BHK Type<span>*</span>
        </div>
        <div className="d-flex gap-5 div-border">
          <div>1 RK</div>
          <div>1BHK</div>
          <div>2 BHK</div>
          <div>3 BHK</div>
          <div>4 BHK</div>
          <div>5+ BHK</div>
        </div>
      </div>
      <div className="row mx-0">
        <div>
          Bathrooms/ Toilets<span>*</span>
        </div>
        <div className="d-flex gap-5 div-border">
          <div>1 </div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6+</div>
        </div>
      </div>
      <div className="row mx-0">
        <div>
          Balcony<span>*</span>
        </div>
        <div className="d-flex gap-5 div-border">
          <div>1 </div>
          <div>2</div>
          <div>3</div>
          <div>4+</div>
        </div>
      </div>
      <div className="row mx-0">
        <div>
          Tenant Preference<span>*</span>
        </div>
        <div className="d-flex gap-5 div-border">
          <div>Any </div>
          <div>Family</div>
          <div>Bachelor (Man)</div>
          <div>Bachelor (Women)</div>
        </div>
      </div>
      <div className="row mx-0">
        <div>
          Availability<span>*</span>
        </div>
        <div className="d-flex gap-5 div-border">
          <div>Immediate </div>
          <div>within 15 days</div>
          <div>within 1 month</div>
          <div>within 2 month</div>
        </div>
      </div>
      <div className="row mx-0 ">
        <div>
          Property Description<span>*</span>
        </div>
        <div>
          <input className="description" />
        </div>
      </div>
    </div>
  );
};

export default Details;
