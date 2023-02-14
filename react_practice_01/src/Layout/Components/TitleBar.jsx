import React from "react";

const TitleBar = () => {
  return (
    <>
      <div className="title-bar hide-for-large">
        <div className="title-bar-left">
          <button
            className="menu-icon"
            type="button"
            data-open="my-info"
          ></button>
          <span className="title-bar-title">Mike Mikerson</span>
        </div>
      </div>
    </>
  );
};

export default TitleBar;
