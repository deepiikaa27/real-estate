import React, { useContext } from "react";
import "./Preview.css";
import { Link } from "react-router-dom";
import propimg from "../../Assets/Frame 31.svg";
import FormDataContext from "../../context/FormDataContext";
import location from "../../Assets/location.png";
import buildings from "../../Assets/building.png";
import bedroom from "../../Assets/bedroom.png";
import area from "../../Assets/area.png";
import bathroom from "../../Assets/batroom.png";
import ground from "../../Assets/ground.png";
import pets from "../../Assets/pets.png";
import food from "../../Assets/food.png";

const Preview = () => {
  const { details, amenties } = useContext(FormDataContext);
  const checkedAmenities = amenties.filter((item) => item.isChecked);

  return (
    <div className="preview-page ">
      <div className="container-fluid bg-white ">
        <div className="row mx-0 bg-white preview-title ">
          <div className="col-8 ps-5 mt-5">
            <div className="pv-t1">
              1 BHK Flat / Apartment For Rent in Gokul Village Chs 2 <br /> (545
              Sq.ft.)
            </div>
            <div className="pv-t2 mt-1">
              <img src={location} className="pe-2" />
              Gokul village chs 2 Shanti Park, near st. Xaviours High school
            </div>
            <div className="pv-img mt-2">
              <div>
                <div></div>
              </div>
            </div>
            <div className="img-footer d-flex justify-content-between shadow-sm px-2 pe-5">
              <div>Property ID:9999999</div>
              <div>Reject this property X</div>
            </div>
            <div className="mt-5 p-4 overview border">
              <div className="d-flex justify-content-between align-items-center ">
                <h2>Property Overview</h2>
                <small className="fw-bold text-secondary">
                  {" "}
                  Society :Gokul Village
                </small>
              </div>
              <div className="row mx-0 my-5 px-2 ">
                <div className="col-4 mb-5 d-flex">
                  <div>
                    <img src={bedroom} className="pe-1" />
                  </div>
                  <div className="overview-text">
                    <div>Two(2)</div>
                    <div>Bedrooms</div>
                  </div>
                </div>
                <div className="col-4 d-flex">
                  <div>
                    <img src={bathroom} className="pe-1" />
                  </div>
                  <div className="overview-text">
                    <div>One(1)</div>
                    <div>Bathrooms</div>
                  </div>
                </div>
                <div className="col-4 d-flex">
                  <div>
                    <img src={area} className="pe-1" />
                  </div>
                  <div className="overview-text">
                    <div>{details.area}</div>
                    <div>Sq.ft.</div>
                  </div>
                </div>
                <div className="col-4 d-flex">
                  <div>
                    <img src={ground} className="pe-1" />
                  </div>
                  <div className="overview-text">
                    <div>{details.floor}</div>
                    <div>Property On Floor</div>
                  </div>
                </div>
                <div className="col-4 d-flex">
                  <div>
                    <img src={ground} className="pe-1" />
                  </div>
                  <div className="overview-text">
                    <div>{details.totalfloor}</div>
                    <div>Total floor</div>
                  </div>
                </div>
                <div className="col-4 d-flex">
                  <div>
                    <img src={pets} className="pe-1" />
                  </div>
                  <div className="overview-text">
                    <div>{details.petAllowed}</div>
                    <div>Pets Allowed</div>
                  </div>
                </div>
                <div className="col-4 d-flex mt-5">
                  <div>
                    <img src={food} className="pe-1" />
                  </div>
                  <div className="overview-text">
                    <div>{details.nonVeg}</div>
                    <div>Non-Veg</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-5 p-4 border">
              <h2>Ammenties</h2>
              <div className="row mx-0 mt-3">
                {checkedAmenities.map((item, index) => (
                  <div className="col-4 d-flex justify-content-center align-items-center amen-data text-center">
                    <div className="">
                      <div className=" mb-2">
                        <img src={item.img} />
                      </div>
                      <small className="">{item.name}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-3 py-4 border desc-text">
              <h3 className="mb-4">Description</h3>
              <div className="">
                Spread over 510 sqft. this home is an ideal place to live in.
                Access to bus station & medical stores is very easy & convenient
                from this house.
              </div>
              <div className="my-2">
                {" "}
                If you are a frequent traveller, then you'll be happy to note
                that train station is less than 10 minutes from this house. With
                PVR Cinemas - Mira Road, Maxus Cinemas & INOX close by, you can
                catch your favourite movies running & never worry about missing
                a show because of traffic.
              </div>
              <div> Never miss out on lifestyle as Rassaz Mall......</div>
              <div className="mt-2">
                <Link>Show more...</Link>
              </div>
            </div>
          </div>
          <div className="col-4 mt-5 ps-3">
            <div className="d-flex justify-content-between py-3 px-5 rent">
              <div className="rent-text text-center">
                <div>₹ 20,000 / Month</div>
                <div className="">(Rent-Negotiable)</div>
              </div>
              <div>
                <div className="rent-text text-center">
                  <div>₹ 20,000 </div>
                  <div className="">(Deposit)</div>
                </div>
              </div>
            </div>
            <div className="enquiry-form px-4 py-3 mt-3 shadow-sm">
              <div className="enquiry-title">
                Send an Inquiry for this property?
                <div className="enquiry-person">
                  Contact Person : Melvin Lasrado
                </div>
              </div>

              <div>
                <input type="text" value="+91-999999999" />
              </div>
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div className="d-flex gap-2">
                <input type="text" value="+91" className="w-25 " />
                <input type="text" placeholder="" />
              </div>
              <div className="px-2 mt-3 py-3 text-center bg-white text-secondary fw-bold small border">
                I would like more information about Sector 5, shanti nagar,
                anubhav society
              </div>
              <div className="text-center">
                <button className="mt-4">SEND INQUIRY</button>
              </div>
            </div>
          </div>

          <div className="px-5 py-4">
            <div className="border pt-4">
              <h3 className="ps-5 ">Ratings and Reviews</h3>
              <div className="row mx-0">
                <div className="col-6">
                  <div className="review-card m-5">
                    <div className="d-flex justify-content-between review-name review-name">
                      <div className="">Aishwarya Malik </div>
                      <div>4.5</div>
                    </div>
                    <div className="pt-3">
                      <div className="fw-bold text-secondary">Good Society</div>
                      <div>
                        The garden view is mesmerizing, the exposure of natural
                        light is good. Easy access to stores, markets and
                        schools.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="review-card m-5">
                    <div className="d-flex justify-content-between review-name">
                      <div className="review-name   ">Rajendra Prasad</div>
                      <div>4.5</div>
                    </div>
                    <div className="pt-3">
                      <div className="fw-bold text-secondary">
                        Good Society & Apartment
                      </div>
                      <div>
                        The garden view is mesmerizing, the exposure of natural
                        light is good. Easy access to stores, markets and
                        schools.
                      </div>
                    </div>
                  </div>
                </div>
                <button className="ms-5 mb-5">Write A review</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container-fluid similar-prop">
          <div className="row mx-0 px-5 py-5">
            <h3 className="mb-4">Similar Properties in Mira Road</h3>
            <div className="col-3">
              <div className="prop-card ">
                <img src={propimg} />
                <div className="prop-title">
                  <div> Modern & Luxury 2BHK Flat For Rent</div>
                  <div className="location">
                    Kashimira, Mira Road East, Mumbai
                  </div>
                  <div>60.50 Lac</div>
                  <div>1850 Sq. ft.</div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="prop-card ">
                <img src={propimg} />
                <div className="prop-title">
                  <div> Modern & Luxury 2BHK Flat For Rent</div>
                  <div className="location">
                    Kashimira, Mira Road East, Mumbai
                  </div>
                  <div>60.50 Lac</div>
                  <div>1850 Sq. ft.</div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="prop-card ">
                <img src={propimg} />
                <div className="prop-title">
                  <div> Modern & Luxury 2BHK Flat For Rent</div>
                  <div className="location">
                    Kashimira, Mira Road East, Mumbai
                  </div>
                  <div>60.50 Lac</div>
                  <div>1850 Sq. ft.</div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="prop-card ">
                <img src={propimg} />
                <div className="prop-title">
                  <div> Modern & Luxury 2BHK Flat For Rent</div>
                  <div className="location">
                    Kashimira, Mira Road East, Mumbai
                  </div>
                  <div>60.50 Lac</div>
                  <div>1850 Sq. ft.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="abt-section">
        <div>
          <div className="px-5 py-5">
            <div className="border p-4 desc-text">
              <h3 className="mb-3">About Miraroad</h3>
              <div className="">
                Spread over 510 sqft. this home is an ideal place to live in.
                Access to bus station & medical stores is very easy & convenient
                from this house.
              </div>
              <div className="my-3">
                If you are a frequent traveller, then you'll be happy to note
                that train station is less than 10 minutes from this house. With
                PVR Cinemas - Mira Road, Maxus Cinemas & INOX close by, you can
                catch your favourite movies running & never worry about missing
                a show because of traffic.
              </div>
              <div>Never miss out on lifestyle as Rassaz Mall......</div>
              <div className="mt-2">
                <Link>Show more...</Link>
              </div>
              <button className=" my-5">Write a review</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
