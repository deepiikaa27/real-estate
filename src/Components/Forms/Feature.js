import React, { useContext } from "react";
import FormDataContext from "../../context/FormDataContext";

const Feature = () => {
  const { setDetails, amenties, updateAmenity } = useContext(FormDataContext);

  const handleCheckbox = (index) => (e) => {
    const isChecked = e.target.checked;
    updateAmenity(index, isChecked);
  };

  return (
    <div className="form-body details-body px-5 pt-2 feature-body">
      <div className="row mx-0">
        <div>Genetral Feature</div>
      </div>
      <div className="row mx-0">
        <div>
          <span>*</span>Non- Veg
        </div>
        <div className="col-4">
          <input
            type="radio"
            value="Allowed"
            onChange={(e) => setDetails({ nonveg: e.target.value })}
          />
          <label className="ms-2">Allowed</label>
        </div>
        <div className="col-4">
          <input
            type="radio"
            value="Not Allowed"
            onChange={(e) => setDetails({ nonveg: e.target.value })}
          />
          <label className="ms-2">Not Allowed</label>
        </div>
      </div>
      <div className="row mx-0">
        <div>
          <span>*</span>Pets Allowed
        </div>
        <div className="col-4">
          <input
            type="radio"
            value="Yes"
            onChange={(e) => setDetails({ petAllowed: e.target.value })}
          />
          <label className="ms-2">yes</label>
        </div>
        <div className="col-4">
          <input
            type="radio"
            value="No"
            onChange={(e) => setDetails({ petAllowed: e.target.value })}
          />
          <label className="ms-2">No</label>
        </div>
      </div>
      <div className="row mx-0">
        <div>
          <span>*</span>Electricity
        </div>
        <div className="col-4">
          <input type="radio" />
          <label className="ms-2">Rare/No Powercut</label>
        </div>
        <div className="col-4">
          <input type="radio" />
          <label className="ms-2">Frequent Powercut</label>
        </div>
      </div>
      <div className="row mx-0">
        <div>
          <span>*</span>Water Supply
        </div>
        <div className="col-4">
          <input type="radio" />
          <label className="ms-2">Municipal Corporation (BMC)</label>
        </div>
        <div className="col-4">
          <input type="radio" />
          <label className="ms-2">Borewell </label>
        </div>
        <div className="col-4">
          <input type="radio" />
          <label className="ms-2">Both </label>
        </div>
      </div>
      <hr />
      <div className="row mx-0">
        <div>
          <span>*</span>Furnishing
        </div>
        <div className="col-4">
          <input type="checkbox" />
          <label className="ms-2">Fully Furnished</label>
        </div>
        <div className="col-4">
          <input type="checkbox" />
          <label className="ms-2">Semi Furnished </label>
        </div>
        <div className="col-4">
          <input type="checkbox" />
          <label className="ms-2">Unfurnished </label>
        </div>
      </div>
      <hr />
      <div>
        <div className="row mx-0">
          <div className="mb-2">Additional Features</div>
          <div className="col-4 my-2">
            <input type="checkbox" />
            <label className="ms-2">Air Conditioning</label>
          </div>
          <div className="col-4  my-2">
            <input type="checkbox" />
            <label className="ms-2">Ceiling Fans </label>
          </div>
          <div className="col-4  my-2">
            <input type="checkbox" />
            <label className="ms-2">Refrigerator</label>
          </div>
          <div className="col-4  my-2">
            <input type="checkbox" />
            <label className="ms-2">Washing machine </label>
          </div>
          <div className="col-4  my-2">
            <input type="checkbox" />
            <label className="ms-2">Microwave</label>
          </div>
          <div className="col-4  my-2">
            <input type="checkbox" />
            <label className="ms-2">oven </label>
          </div>
        </div>
      </div>
      <hr />
      <div className="row mx-0">
        <div>Tiles</div>
        <div className="col-4">
          <input type="checkbox" />
          <label className="ms-2">Normal White Tiles</label>
        </div>
        <div className="col-4">
          <input type="checkbox" />
          <label className="ms-2">Marble</label>
        </div>
        <div className="col-4">
          <input type="checkbox" />
          <label className="ms-2">Vitrified Tiles</label>
        </div>
      </div>
      <hr />
      <div className="row mx-0">
        <div>
          <span>*</span>Safety
        </div>
        <div className="col-4">
          <input type="checkbox" />
          <label className="ms-2">
            24/7 Security personnel <br />
            (Gated Security)
          </label>
        </div>
        <div className="col-4">
          <input type="checkbox" />
          <label className="ms-2">Security Systems- CCTV</label>
        </div>
      </div>
      <hr />

      <div className="row mx-0 ">
        <div className="mb-5">SOCIETY AMENITIES</div>
        {amenties.map((item, index) => (
          <div
            className="col-4 d-flex justify-content-center align-items-center amen-data text-center"
            key={index}
          >
            <div className="">
              <div className=" mb-2">
                {" "}
                <img src={item.img} />
              </div>
              <small className="">{item.name}</small>
              <div className="mt-2">
                <input
                  type="checkbox"
                  checked={item.isChecked}
                  onChange={handleCheckbox(index)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
