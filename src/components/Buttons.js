import React from "react";
import { useRef } from "react";
const Buttons = () => {
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);

  const handle1Click = () => {
    button1Ref.current.classList.add("active");
    button2Ref.current.classList.remove("active");
  };

  const handle2Click = () => {
    button2Ref.current.classList.add("active");
    button1Ref.current.classList.remove("active");
  };

  return (
    <div className="button-center">
      <div className="button-flex">
        <div>
          <button
            className="button-style"
            ref={button1Ref}
            onClick={handle1Click}
          >
            Buy
          </button>
        </div>
        <div>
          <button
            className="button-style"
            ref={button2Ref}
            onClick={handle2Click}
          >
            Rent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
