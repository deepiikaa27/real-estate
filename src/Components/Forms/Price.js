import React from "react";

const Price = () => {
  return (
    <div className="form-body details-body px-5 pt-3">
      <div className="row mx-0">
        <div className="col-6">
          <div className="">
            Rent<span>*</span>
          </div>
          <input placeholder="Rs" type="text" />
        </div>
        <div className="col-6">
          <div className="">
            Security<span>*</span>
          </div>
          <input type="text" placeholder="Rs" />
        </div>
      </div>
      <div className="row mx-0">
        <div className="col-6">
          <div className="">
            Maintainence<span>*</span>
          </div>
          <input placeholder="Maintainence" type="text" />
        </div>
        <div className="col-6">
          <div className="">
            Maintainence<span>*</span>
          </div>
          <input className="me-2 w-50" placeholder="Maintainence" type="text" />
          <select className="w-25">j</select>
        </div>
      </div>
      <div className="row mx-0">
        <div>Additional Pricing details to convey to agent?</div>
        <div>
          {" "}
          <input
            style={{ height: "80px" }}
            placeholder="Do you have any concerns regarding pricing of your property? Add your concerns here or call us. "
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
