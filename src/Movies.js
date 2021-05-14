import React from "react";
import useEffect from "react";
import movieData from "./api/sample.json";

const Movies = () => {
  const movies = movieData.entries.filter((x) => {
    return (x.programType == "movie") & (x.releaseYear >= 2010);
  });
  const twentyOneMovies = movies.slice(0, 21);

  const sortedMovies = twentyOneMovies.sort((a, b) =>
    a.title > b.title ? 1 : -1
  );

  return (
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
