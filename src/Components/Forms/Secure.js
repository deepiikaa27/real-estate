import React from "react";
import { Link } from "react-router-dom";

const Secure = () => {
  return (
    <div className="form-body px-5 pt-2">
      <div className="d-flex justify-content-between">
        <div>
          Enter OTP sent on 999-999-9999 <span>*</span>
        </div>
        <small>
          <Link>Change</Link>
        </small>
      </div>
      <input className="w-100" />
      <small className="text-end">Resend</small>
    </div>
  );
};

export default Secure;
