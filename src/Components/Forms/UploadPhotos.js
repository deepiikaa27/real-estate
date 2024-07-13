import React from "react";

const UploadPhotos = () => {
  return (
    <div className="form-body details-body px-5 pt-3">
      <div>Add Photos / videos to attract more tenants! </div>
      <div>
        Add Photos of living room, bedroom, bathroom, floor, doors, kitchen,
        balcony, location map, neighborhood, etc
      </div>
      <div className="mt-2 upload d-flex justify-content-center align-items-center">
        <div>
          <button className="add-photo">+ Add Photos Now</button>
        </div>
      </div>
    </div>
  );
};

export default UploadPhotos;
