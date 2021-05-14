// import React from "react";
import facebookWhite from "./assets/facebook-white.svg";
import InstagramWhite from "./assets/instagram-white.svg";
import twitterWhite from "./assets/twitter-white.svg";
import appstore from "./assets/app-store.svg";
import playstore from "./assets/play-store.svg";
import windowsstore from "./assets/windows-store.svg";

import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
// const Footer = () => {
//   return (
//     <div>
//       <div
//         style={{
//           backgroundColor: "#414141",
//           height: "220px",
//           margin: "2em",
//           marginBottom: "0em",
//         }}
//       >
//         <div
//           style={{
//             marginLeft: "5em",
//             color: "#C3C0BB",
//             padding: "40px",
//             paddingBottom: "0px",
//             fontSize: "18px",
//           }}
//         >
//           Home | Terms and Conditions | Privacy Policy | Collection Statement |
//           Help | Manage Account
//         </div>
//         <div
//           style={{
//             marginLeft: "5em",
//             padding: "40px",
//             paddingTop: "10px",
//             paddingBottom: "0px",
//             color: "#888D91",
//             fontSize: "18px",
//           }}
//         >
//           Copyright © 2016 DEMO Streaming.All Rights Reserved
//         </div>
//         <div
//           style={{
//             marginLeft: "5em",
//             padding: "40px",
//             paddingTop: "40px",
//             paddingBottom: "0px",
//           }}
//         >
//           <span>
//             <img src={facebookWhite} width="30" height="30"></img>
//           </span>
//           <span style={{ marginLeft: "1em" }}>
//             <img src={twitterWhite} width="30" height="30"></img>
//           </span>
//           <span style={{ marginLeft: "1em" }}>
//             <img src={InstagramWhite} width="30" height="30"></img>
//           </span>
//           <span style={{ marginLeft: "40em" }}>
//             <img src={appstore} width="130px" height="40"></img>
//           </span>
//           <span style={{ marginLeft: "1em" }}>
//             <img src={playstore} width="130px" height="40"></img>
//           </span>
//           <span style={{ marginLeft: "1em" }}>
//             <img src={windowsstore} width="130px" height="40"></img>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

const Footer = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4 pb-5">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="p-0 pl-md-5 pr-md-5 pt-md-3 p-sm-0">
          <MDBCol md="8">
            {/* <h5 className="title">Footer Content</h5> */}
            <div
              style={{
                marginLeft: "0em",
                color: "#C3C0BB",

                paddingBottom: "0px",
                fontSize: "1em",
              }}
            >
              <ul>
                <li className="list-unstyled" style={{ paddingRight: "1em" }}>
                  <a href="#!">Home</a>
                </li>
                <span className="divider" />
                <li
                  className="list-unstyled"
                  style={{ paddingRight: "1em", paddingLeft: "1em" }}
                >
                  <a href="#!">Terms and condition</a>
                </li>
                <span className="divider" />
                <li
                  className="list-unstyled"
                  style={{ paddingRight: "1em", paddingLeft: "1em" }}
                >
                  <a href="#!">Privacy policy</a>
                </li>
                <span className="divider" />
                <li
                  className="list-unstyled"
                  style={{ paddingRight: "1em", paddingLeft: "1em" }}
                >
                  <a href="#!">Collection statement</a>
                </li>
                <span className="divider" />
                <li
                  className="list-unstyled"
                  style={{ paddingRight: "1em", paddingLeft: "1em" }}
                >
                  <a href="#!">Help</a>
                </li>
                <span className="divider" />
                <li className="list-unstyled" style={{ paddingLeft: "1em" }}>
                  <a href="#!">Management</a>
                </li>
              </ul>
            </div>
            {/* <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p> */}
            {/* <div>
              <span>
                <img src={facebookWhite} width="30" height="30"></img>
              </span>
            </div> */}
          </MDBCol>

          {/* <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol> */}
        </MDBRow>
        <MDBRow className="p-0 pl-md-5 pr-md-5 pb-md-5 p-sm-0">
          <MDBCol md="8">
            <div
              style={{
                marginLeft: "2em",
                paddingTop: "10px",
                paddingLeft: "1em",
                color: "#888D91",
              }}
            >
              Copyright © {new Date().getFullYear()} DEMO Streaming.All Rights
              Reserved
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="p-0 pl-md-5 pr-md-5 pb-md-3 pt-sm-4 ">
          <MDBCol sm="12" md="12" lg="6">
            <div style={{ paddingLeft: "3em" }}>
              <span>
                <img src={facebookWhite} width="30" height="30"></img>
              </span>
              <span style={{ paddingLeft: "2em", paddingRight: "2em" }}>
                <img src={twitterWhite} width="30" height="30"></img>
              </span>
              <span>
                <img src={InstagramWhite} width="30" height="30"></img>
              </span>
            </div>
          </MDBCol>
          <MDBCol md="12" sm="12" lg="6" className="p-0 p-sm-4 p-md-4 p-lg-0">
            <div style={{ paddingLeft: "3em" }}>
              <span>
                <img src={appstore} width="130px" height="40"></img>
              </span>
              <span style={{ paddingLeft: "2em", paddingRight: "2em" }}>
                <img src={playstore} width="130px" height="40"></img>
              </span>
              <span>
                <img src={windowsstore} width="130px" height="40"></img>
              </span>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      {/* <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div> */}
    </MDBFooter>
  );
};

//export default FooterPage;
export default Footer;
