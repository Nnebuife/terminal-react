import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <h3 id="city">New York</h3>

      <div className="row">
        <div className="col-6">
          <ul>
            <li id="current-day">Sunday 05:42</li>
            <li id="description">Clear</li>
            <li id="wind-speed">
              {" "}
              Wind : <span id="speed-wind">00km</span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <img src="" alt="" id="icon" />
          <span className="current-temp" id="main-temp">
            {" "}
            12{" "}
          </span>
          <span className="units" id="celsius-value">
            <a href=" ">°C </a> |{" "}
          </span>
          <span className="fahr" id="fahr-value">
            <a href=" ">°F</a>
          </span>
        </div>
      </div>
    </div>
  );
}
