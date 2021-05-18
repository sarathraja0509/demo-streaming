import React, { useState, useEffect } from "react";
import movieData from "./api/sample.json";

const Movies = () => {
  const [loading, setloading] = useState(true);
  const [sortedMovies, setsortedMovie] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const movies = movieData.entries.filter((x) => {
        return (x.programType == "movie") & (x.releaseYear >= 2010);
      });
      const twentyOneMovies = movies.slice(0, 21);

      const sortedMovies = twentyOneMovies.sort((a, b) =>
        a.title > b.title ? 1 : -1
      );
      setsortedMovie(sortedMovies);
      setloading(false);
    }, 2000);
  }, []);

  return loading ? (
    <div>
      <div
        style={{
          backgroundColor: "#414141",
          height: "80px",
          marginTop: "0em",
        }}
      >
        <div
          style={{
            fontSize: "1.5em",
            fontWeight: "500",
            fontFamily: "sans-serif",
            fontVariant: "raleway",
            color: "#FFFDEF",
            fontWeight: "normal",
            marginLeft: "1.5em",
            paddingTop: "23px",
          }}
        >
          Popular Tiles
        </div>
      </div>
      <div
        style={{
          height: "80px",
          margin: "2em",
          marginTop: "2em",
          fontFamily: "sans-serif",
          fontVariant: "raleway",
          marginLeft: "10em",
          fontWeight: "normal",
        }}
      >
        Loading...
      </div>
    </div>
  ) : (
    <div>
      <div
        style={{
          backgroundColor: "#414141",
          height: "80px",
          marginBottom: "2em",
          marginTop: "0em",
        }}
      >
        <div
          style={{
            fontSize: "1.5em",
            fontWeight: "500",
            fontFamily: "sans-serif",
            fontVariant: "raleway",
            color: "#FFFDEF",
            fontWeight: "normal",
            marginLeft: "1.5em",
            paddingTop: "23px",
          }}
        >
          Popular Movies
        </div>
      </div>

      {sortedMovies.map((x) => (
        <div
          style={{
            marginLeft: "4em",
            display: "inline-grid",
          }}
        >
          <div>
            <img
              src={x.images["Poster Art"].url}
              height="250"
              width="130"
            ></img>
          </div>
          <div style={{ width: "140px" }}>{x.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
