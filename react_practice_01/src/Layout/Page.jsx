import React from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import MySite from "./Components/MySite";
import Contact from "./Components/Contact";
import TitleBar from "./Components/TitleBar";

const Page = () => {
  return (
    <div className="off-canvas-wrapper">
      <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
        <div
          className="off-canvas position-left reveal-for-large"
          id="my-info"
          data-off-canvas
          data-position="left"
        >
          <div className="row column">
            <br />
            <Sidebar />
          </div>
        </div>

        <div className="off-canvas-content" data-off-canvas-content>
          <TitleBar />
          <Header />
          <MySite />
          <hr />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Page;
