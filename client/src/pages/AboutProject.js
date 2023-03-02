import React from "react";
import "../about.css";

function AboutUsPage(props) {
  return (
    <>
      <div className="col text-center">
        <h1 className="purpose"> The ArtHouse Tix Purpose</h1>
        <br></br>
        <p className="mb-3">
          The Arthouse Tickets is a platform that connects film enthusiasts with independent, foreign, and classic films at arthouse cinemas. The website and app aggregate movie showtimes and ticketing information from various sources and present it in a user-friendly interface. With its comprehensive and convenient features, The ArtHouse Tix is the perfect solution for individuals seeking a unique movie-going experience at arthouse cinemas.
        </p>
        <embed src="Arthouse_Tix.pdf" type="application/pdf" width="100%" height="600px"/>

      </div>
    </>
  );
}

export default AboutUsPage;