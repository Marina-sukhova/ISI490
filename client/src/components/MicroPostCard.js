import React from "react";
// import { Link } from "react-router-dom";

function MicroPostCard( {title, year} ) {  
  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
          {/* <Link to={"/posts/" + id}>{content}</Link> */}
          <ul>
            <li><strong>{title}, ({year})</strong></li><br></br>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MicroPostCard;
