import React from "react";

const error = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#414141",
          height: "80px",
          margin: "0em",
          marginTop: "0em",
        }}
      >
        <div
          style={{
            fontSize: "1.5em",
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
        Oops,Something went Wrong
      </div>
    </div>
  );
};

export default error;
