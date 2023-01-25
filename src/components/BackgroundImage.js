import React from "react";
import screenShot1 from "../images/ScreenShot1.png";
import screenShot2 from "../images/ScreenShot2.png";
const BackgroundImage = () => {
  return (
    <div className="image-container">
      <div
        style={{
          backgroundImage: `url(${screenShot1})`,
          flex: 1,
          height: "288px",
          width: "1054px",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        style={{
          backgroundImage: `url(${screenShot2})`,
          flex: 1,
          width: "873px",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default BackgroundImage;
