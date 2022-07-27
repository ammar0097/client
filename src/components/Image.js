import React from "react";
import Img from "react-bootstrap/Image";
import image from "./image.png";

const Image = () => {
  return (
    <div className="hand-image">
      <Img
        src={image}
        style={{ height: 400, width: 450 }}
        className="fluid"
        alt="Italian Trulli"
      />
    </div>
  );
};

export default Image;
