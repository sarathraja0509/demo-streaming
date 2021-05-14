import React, { useState } from "react";
import Movie from "./assets/MOVIES.PNG";
import Series from "./assets/SERIES.PNG";
import { useEffect } from "react";
const Home = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setloading(false);
  }, []);
  return loading ? (
    <div>
      <div
        style={{
          backgroundColor: "#414141",
          height: "80px",
          margin: "2em",
          marginTop: "0em",
        }}
      >
        <div
          style={{
            fontSize: "30px",
            fontFamily: "sans-serif",
            fontVariant: "raleway",
            color: "#FFFDEF",
            fontWeight: "normal",
            marginLeft: "4.2em",
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
          marginTop: "0em",
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

      <div style={{ margin: "7em" }}>
        <a href="/Movies">
          <img src={Movie} width="200" height="300"></img>
        </a>
        <a href="/Series">
          <img src={Series} width="200" height="300"></img>
        </a>
      </div>
    </div>
  );
};

export default Home;
