import React from "react";
import seriesdata from "./api/sample.json";
const Series = () => {
  const series = seriesdata.entries.filter((x) => {
    return (x.programType == "series") & (x.releaseYear >= 2010);
  });
  const twentyOneSeries = series.slice(0, 21);
  const sortedSeries = twentyOneSeries.sort((a, b) =>
    a.title > b.title ? 1 : -1
  );

  console.log(sortedSeries);
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
