import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./home";
import Header from "./header";
import Footer from "./footer";
import { BrowserRouter } from "react-router-dom";
import Maproute from "./maproute";
const Index = () => {
  return (
    <Fragment>
      <Header></Header>
      <BrowserRouter>
        <Maproute>
          <Home></Home>
        </Maproute>
      </BrowserRouter>
      <Footer></Footer>
    </Fragment>
  );
};

export default Index;

ReactDOM.render(
  <Index></Index>,

  document.getElementById("root")
);
