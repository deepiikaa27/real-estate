import React from "react";
import { useNavigate } from "react-router-dom";

const Submit = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/preview");
  };
  return (
    <div className="bg-white" style={{ height: "89vh" }}>
      <div className="submission-title ">
        <div className="sb-t1">
          Thank you for listing your property with us,
        </div>
        <div className="my-3">
          Your listing will be reviewed and will go live within 24 hours.
        </div>
        <div className="mb-4">
          We will now manage your listing and get in touch with you after
          finding the best suitable tenant <br /> as per your preference.
        </div>
        <small>-Dylan Estates</small>
        <div className="mt-5">
          <button>Edit Property Listing</button>
          <button className="ms-3" onClick={handleClick}>
            Preview Property Listing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Submit;
