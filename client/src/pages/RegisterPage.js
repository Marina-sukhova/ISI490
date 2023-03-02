import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RegisterPage() {
    return (
        <div className="col-10 col-md-8 col-lg-7">
            <h1>register</h1>
          <form action="/register" method="POST">
           
          </form>
        </div>
      );
}
export default RegisterPage;