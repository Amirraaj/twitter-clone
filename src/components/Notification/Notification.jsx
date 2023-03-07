import React from "react";
import divider from "../style";
import { useState } from "react";

function Notification() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="w-2/4 w-full bg-dark">
      <h1 className="text-light p-5 text-left font-extrabold text-2xl">
        Notifications
      </h1>
      <div className="flex items-center cursor-pointer">
        <h2
          className="text-light w-1/2 text-center p-5 text-left font-bold text-xl"
          style={{
            background: isActive && "#242222",
          }}
          onClick={() => setIsActive(true)}
        >
          All
        </h2>
        <h2
          className="text-light w-1/2 text-center p-5 text-left font-bold text-xl"
          style={{
            background: !isActive && "#242222",
          }}
          onClick={() => setIsActive(false)}
        >
          Mentions
        </h2>
      </div>
      <div style={divider}></div>

          <div>
            
          </div>


    </div>
  );
}

export default Notification;
