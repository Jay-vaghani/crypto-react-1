import React from "react";
import "./Loader.css"

function Loader() {
  return (
    <div>
      <div>
        <div className="center loader my-3 bg-black bg-gradient rounded-3 overflow-x-hidden">
          <div className="loader-line--invert a-slingshot bg-warning bg-gradient rounded-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
