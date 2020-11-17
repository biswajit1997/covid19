import React from "react";
import "../App.css";
import { GoDashboard } from "react-icons/go";
import { RiDashboardFill } from "react-icons/ri";
import { BsPersonSquare, BsInfoCircle } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { GiStairsGoal } from "react-icons/gi";
import { AiOutlineMinusCircle } from "react-icons/ai";

function LeftSideBar({ logoColor: logoColor, textColor: textColor }) {
  return (
    <div>
      <div>
        {logoColor === "black" ? (
          <img
            src="https://statedashboard.odisha.gov.in/public/website/img/logo.png"
            alert="image"
          />
        ) : (
          <img
            src="https://statedashboard.odisha.gov.in/public/website/img/logowhite.png"
            alert="image"
          />
        )}
        <div className="covid">COVID</div>
        <div className="dash" style={{ color: textColor }}>
          <b>DASHBOARD</b>
        </div>
        <div className="govt" style={{ color: textColor }}>
          GOVT. OF ODISHA
        </div>
      </div>
      <div className="mt-2" style={{ color: textColor }}>
        <li>
          <div class="icon">
            <GoDashboard />
          </div>
          Dashboard
        </li>
        <li>
          <div class="icon">
            <RiDashboardFill />{" "}
            <span className="blink">
              <AiOutlineMinusCircle />
            </span>
          </div>
          Dist.Dashboard
        </li>
        <li>
          <div class="icon">
            <BsPersonSquare />
          </div>
          Registration
          <div>Summary</div>
        </li>
        <li>
          <div class="icon">
            <HiOutlineMailOpen />
          </div>
          Govt.Orders
        </li>
        <li>
          <div class="icon">
            <BsInfoCircle />
          </div>
          Important Information
        </li>
        <li>
          <div class="icon">
            <GiStairsGoal />
          </div>
          Odisha Success Stories
        </li>
        {/* <li>
                <div class="icon">
                  <GrMultimedia />
                </div>
                Covid Portal
              </li> */}
      </div>
    </div>
  );
}

export default LeftSideBar;
