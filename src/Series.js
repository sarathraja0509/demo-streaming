import React, { useEffect, useState } from "react";
import seriesdata from "./api/sample.json";
const Series = () => {
  const [loading, setloading] = useState(true);
  const [sortedSeries, setsortedSeries] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const series = seriesdata.entries.filter((x) => {
        return (x.programType == "series") & (x.releaseYear >= 2010);
      });
      const twentyOneSeries = series.slice(0, 21);
      const sortedSeries = twentyOneSeries.sort((a, b) =>
        a.title > b.title ? 1 : -1
      );
      setsortedSeries(sortedSeries);
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
          Popular Series
        </div>
      </div>
      {sortedSeries.map((x) => (
        <div style={{ marginLeft: "4em", display: "inline-grid" }}>
          <div>
            <img
              src={x.images["Poster Art"].url}
              height="250"
              width="120"
            ></img>
          </div>
          <div style={{ width: "140px" }}>{x.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Series;
