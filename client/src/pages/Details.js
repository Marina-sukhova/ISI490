import React, { Component } from "react";
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import "../details.css";


function FormatResults({ title, year, network, genres, ended, imdbNumber, image, plot, avg, comment }) {
  // determines the lifecycle/ runs only at the beginning

  let content = JSON.stringify({ plot })
  let content1 = content.substring(12, content.length - 6)
  let content2 = content1.replace('<b>', '').replace('</b>', '').replace('<i>', '').replace('</i>', '').replace('<p>', '').replace('</p>', '')
  let y = JSON.stringify({ year })
  let y1 = y.substring(9,13)
  let e = JSON.stringify({ ended })
  let e2 = e.substring(10,14)
  return (

    <div>
      <header><h1><b>{title} ({y1} - {e2})</b></h1></header>
      <div className="container" >
        <div className="row">
          <div id="image-block"className="col">
            <img id = "image" src={image} alt="pic" />
            <div id="avg">
            {genres+" "}
              <span id ="avg-star">  &#11088;</span>{avg}
            </div>
          </div>
          <div id="summary" className="col" >
          <h2>Summary</h2>
            {content2}
          </div>
        </div>
      </div>
    </div>
  )
}



function ShowComments(props) {

  const { Content } = props.comment
  return (
    <div id="comment">
      {Content || " none"}
    </div>
  )
}

function getImdbString(id) {   //copies the imdb from the route

  const text = JSON.stringify({ id });  // creater a string from an object
  const imdb = text.substring(7, text.length - 2);
  return imdb;
}
async function createMedia(id) {

  return fetch("/api/media_/" + id, {
    method: 'POST',
    credentials: "include",
    headers: {
      'Content-Type': 'application/json',
    },
  })

    .then(response => {
      return response.text();
    })
    .then(data => {
      //  alert(data);

    });
};



async function createRating(id, ratingValue) {



  return fetch("/api/media_/" + id + "/" + ratingValue, {
    method: 'POST',
    credentials: "include",
    headers: {
      'Content-Type': 'application/json',
    },

  })
    .then(response => {
      return response.text();
    })
    .then(data => {
      // alert(data);

    });
};
async function createComment(id, text) {

  return fetch("/api/media_/comments/for/" + id + "/" + text, {
    method: 'POST',
    credentials: "include",
    headers: {
      'Content-Type': 'application/json',
    },

  })
    .then(response => {
      return response.text();
    })

};
async function stars() {
  let val = 0;
  if (document.getElementById('rs1').checked) {
    val = document.getElementById('rs1').value
  }
  else if (document.getElementById('rs2').checked) {
    val = document.getElementById('rs2').value
  }
  else if (document.getElementById('rs3').checked) {
    val = document.getElementById('rs3').value
  }
  else if (document.getElementById('rs4').checked) {
    val = document.getElementById('rs4').value
  }
  else if (document.getElementById('rs5').checked) {
    val = document.getElementById('rs5').value
  }

  return val;
}

async function getwords() {

  return document.getElementById('text').value;
}

const Details = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [avg, setAvg] = useState([]);
  const [comments, setComments] = useState([])
  const { id } = useParams()
  const imdbID = getImdbString(id)
  console.log(imdbID);

 
  useEffect(() => {
    async function createRecords() {  // wrapper to sync calls
      await createMedia(imdbID);

      let response1 = await fetch("/api/media_/ratings/avarage/" + imdbID)
      let results1 = await response1.json();
      setAvg(results1);

      let response2 = await fetch("/api/media_/comment/" + imdbID)
      let results2 = await response2.json();
      setComments(results2)
    }

    createRecords();

  }, [imdbID]);


  const rater = async () => {
    const star = await stars()
    await createRating(imdbID, star)
    window.location.reload()
  }
  const commenter = async () => {
    const words = await getwords()
    await createComment(imdbID, words)
    window.location.reload()
  }
 
  useEffect(() => {
    async function getData() {

      let response = await fetch("https://api.tvmaze.com/lookup/shows?imdb=" + imdbID)
      let results = await response.json();
      setSearchResults(results)
    }
    getData();
    return () => {};

  }, [imdbID]);

  return (
    <div>
      <FormatResults
        title={searchResults.name}
        year={searchResults.premiered}
        avg={avg.avgRating}
        image={searchResults?.image?.original || "none"}
        ended={searchResults.ended}
        plot={searchResults.summary}
        genres = {searchResults.genres} 
      //   key = {data.show.externals.imdb}
      />
      <div id="rate-block">
        <div class="rating-stars">
          <div id="the-stars">
          <input type="radio" name="rating" id="rs0" checked /><label for="rs0"></label>
          <input type="radio" name="rating" id="rs1" value='1' /><label for="rs1"></label>
          <input type="radio" name="rating" id="rs2" value='2' /><label for="rs2"></label>
          <input type="radio" name="rating" id="rs3" value='3' /><label for="rs3"></label>
          <input type="radio" name="rating" id="rs4" value='4' /><label for="rs4"></label>
          <input type="radio" name="rating" id="rs5" value='5' /><label for="rs5"></label> 
          </div>
        
        </div>
       <div id="rate-button">
          <button  id="r-button"className="btn btn-success" onClick={(rater)}> Submit </button>
        </div>
      </div>

      <div id="comment-block">
        <label  for="text"></label>
        <input type="text" id="text" placeholder="type your thoughts here..."></input>
        <button id="comment-button" className="btn btn-success" onClick={(commenter)}> Submit </button>
      </div>
      <div>
       
        {comments.reverse().map((words) => {
          return <ShowComments comment={words} />
        })}
      </div>
    </div >
  );
}

export default Details;
