import React from "react";
import "../about.css";

function AboutUsPage(props) {
  return (
    <>
      <div className="col text-center">
        <h1 className="mb-3">RREM</h1><br />
        <div className="row">

          <div className="card border-0 col-lg-3">
            <img src={require('../components/Pictures/rajeevpic.png')} className="rounded-circle img-fluid img-thumbnail" alt="RB" height={300} width={300}/>
            <div className="card-body">
              <h4 className="card-title">Rajeev Basanta</h4>
              <p className="card-text">
                Email: rajeev.basanta@gmail.com
                School: Brooklyn College
              </p>
              <a href="https://github.com/rjvbsta" className="btn btn-primary">GitHub Profile</a>
            </div>            
          </div>

          <div className="card border-0 col-lg-3">
            <img src={require('../components/Pictures/rodlerpic.png')} className="rounded-circle img-fluid img-thumbnail" alt="RB" height={300} width={300}/>
            <div className="card-body">
              <h4 className="card-title">Rodler Jean</h4>
              <p className="card-text">
                Email: rodjean1234@gmail.com
                School: Brooklyn College
              </p>
              <a href="https://github.com/rodjean1234" className="btn btn-primary">GitHub Profile</a>
            </div>            
          </div>          

          <div className="card border-0 col-lg-3">
            <img src={require('../components/Pictures/edisonpic.png')} className="rounded-circle img-fluid img-thumbnail" alt="RB" height={300} width={300}/>
            <div className="card-body">
              <h4 className="card-title">Edison Murataj</h4>
              <p className="card-text">
                Email: edismur2@gmail.com <br />
                School: Queens College
              </p>
              <a href="https://github.com/edis123" className="btn btn-primary">GitHub Profile</a>
            </div>            
          </div>

          <div className="card border-0 col-lg-3">
            <img src={require('../components/Pictures/marinapic.png')} className="rounded-circle img-fluid img-thumbnail" alt="RB" height={300} width={300}/>
            <div className="card-body">
              <h4 className="card-title">Marina Sukhova</h4>
              <p className="card-text">
                Email: SukhovaMarina12@gmail.com
                School: College of Staten Island
              </p>
              <a href="https://github.com/Marina-sukhova" className="btn btn-primary">GitHub Profile</a>
            </div>            
          </div>

          
        </div><br /><br />       
        <h1 className="mb-3"> Our Purpose</h1>       
        <p className="mb-3">
          We want to connect users to content by giving customized movie and TV series recommendations across multiple streaming services tailored 
          to their favorite genres and interests. Users will be able to rate and comment on any content on our app and view others ratings to get an 
          opinion about the quality of the content and whether it’s worth watching or not. Our app will eliminate the problem of having to search between
          multiple streaming platforms and essentially streamline the user's search, combining titles from various media streaming services.
        </p>
      </div>
    </>
  );
}

export default AboutUsPage;