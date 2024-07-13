import React, { useState } from "react";

import FormDataContext from "./FormDataContext";
import { amenities } from "../Assets/amentitis";

const ContextProvider = ({ children }) => {
  const [details, setDetails] = useState({
    floor: 0,
    totalfloor: 0,
    area: 0,
    society: "",
    locality: "",
    petAllowed: "",
    nonVeg: "",
  });

  const [amenties, setAmenities] = useState(amenities);

  const updateAmenity = (index, isChecked) => {
    setAmenities((prevAmenities) => {
      const newAmenities = [...prevAmenities];
      newAmenities[index] = { ...newAmenities[index], isChecked: isChecked };
      return newAmenities;
    });
  };
  return (
    <FormDataContext.Provider
      value={{ details, setDetails, amenties, updateAmenity }}
    >
      {children}
    </FormDataContext.Provider>
  );
};

export default ContextProvider;
