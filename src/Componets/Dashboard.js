import "../App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import StateWise from "../StateWise";
import { Spinner } from "reactstrap";
import { GoDashboard } from "react-icons/go";
import { RiDashboardFill } from "react-icons/ri";
import { BsPersonSquare, BsInfoCircle } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { GiStairsGoal } from "react-icons/gi";
import { AiOutlineMinusCircle } from "react-icons/ai";

function Dashboard() {
  const [distApi, setDistApi] = useState([]);
  const [totState, setTotState] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("white");
  let dat = distApi.state_meta_data;
  useEffect(() => {
    axios
      .get("https://api.covid19india.org/misc.json")
      .then(function (response) {
        setDistApi(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://api.covid19india.org/data.json")
      .then(function (response) {
        console.log(response.data.statewise[9]);
        setTotState(response.data.statewise[9]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const handleColorRed = () => {
    setBackgroundColor("red");
  };
  const handleColorYellow = () => {
    setBackgroundColor("yellow");
  };
  const handleColorWhite = () => {
    setBackgroundColor("white");
  };
  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      <div className="col-sm-12">
        <div className="row">
          <div className="col-sm-2 shadow">
            <div>
              <img
                src="https://statedashboard.odisha.gov.in/public/website/img/logo.png"
                alert=""
              />
              <div className="covid">COVID</div>
              <div className="dash">
                <b>DASHBOARD</b>
              </div>
              <div className="govt">GOVT. OF ODISHA</div>
            </div>
            <div className="mt-2">
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
            </div>
          </div>
          <div className="col-sm-10">
            {/* <div className="text-center mb-4">
              <h3>Odisha Covid-19</h3>
            </div> */}
            {totState !== undefined ? (
              <div className="mb-4 container">
                <div className="row state">
                  <div className="active col-3 shadow">
                    <div class="mb-2">Active</div>
                    {totState.active}
                  </div>
                  <div className="confirmed col-3 shadow">
                    <div class="mb-2">Confirmed</div>
                    {totState.confirmed}
                  </div>
                  <div className="recovered col-3 shadow">
                    <div class="mb-2">Recovered</div>
                    {totState.recovered}
                  </div>
                  <div className="deaths col-3 shadow pr-1">
                    <div class="mb-2">Deaths</div>
                    {totState.deaths}
                  </div>
                </div>
              </div>
            ) : (
              <Spinner color="success" />
            )}
            <div className=" col-sm-12 mb-4">
              <StateWise />
            </div>
            <div className="mb-3">
              Theme change:
              <span className="theme-red" onClick={handleColorRed}>
                red
              </span>
              <span className="theme-yellow" onClick={handleColorYellow}>
                yellow
              </span>
              <span className="theme-white" onClick={handleColorWhite}>
                white
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;