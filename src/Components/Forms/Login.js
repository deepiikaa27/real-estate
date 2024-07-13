import React from "react";
import "./forms.css";

const Login = () => {
  return (
    <div className="form-body px-5 pt-2">
      <div className="">
        <div>
          <span>*</span>I am:
          <div className="row mx-0 mt-1">
            <div className="col-6">
              <input type="radio" />
              <label className="ps-2">Owner</label>
            </div>
            <div className="col-6">
              <input type="radio" />
              <label className="ps-2">Builder</label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          Your Name<span>*</span>
        </div>
        <input type="text" placeholder="Name" />
      </div>
      <div>
        <div>
          Country<span>*</span>
        </div>
        <select>
          <option>India</option>
        </select>
      </div>
      <div>
        <div>
          Phone<span>*</span>
        </div>
        <input type="number" placeholder="000-000-000" />
        <div className="mt-2">Or</div>
        <div>
          {" "}
          Email<span>*</span>
        </div>
        <input type="email" placeholder="email" />
      </div>
    </div>
  );
};

export default Login;
