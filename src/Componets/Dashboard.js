import "../App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import StateWise from "./StateWise";
import { Spinner } from "reactstrap";
import LeftSideBar from "./LeftSideBar";
import Topbar from "./Topbar";
import Theme from "./Theme";
import { Pie } from "react-chartjs-2";
import { HorizontalBar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import BarChart from "./BarChart";

function Dashboard() {
  const [india, setIndia] = useState();
  const [totState, setTotState] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [logoColor, setLogoColor] = useState("black");
  const [textColor, setTextColor] = useState("black");

  const [state, setState] = useState({
    dataPie: {
      labels: ["confirmed", "recovered", "deceased", "active"],
      datasets: [
        {
          data: [310052, 299159, 81613, 99280],
          backgroundColor: ["#F7464A", "#28a745", "#949FB1", "#007bff"],
          hoverBackgroundColor: ["#FF5A5E", "#6ab97c", "#A8B3C5", "3777bd"],
        },
      ],
    },
  });

  const [stateApi, setStateApi] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.covid19india.org/state_district_wise.json")
      .then(function (response) {
        // console.log(response.data.Odisha.districtData);
        setStateApi(response.data.Odisha.districtData);
      })
      .catch(function (error) {
        console.log("network error");
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true"
      )
      .then(function (response) {
        // console.log(response.data);
        setIndia(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://api.covid19india.org/data.json")
      .then(function (response) {
        // console.log(response.data.statewise[9]);
        setTotState(response.data.statewise[9]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleColorYellow = () => {
    setBackgroundColor("#ffff99");
    setLogoColor("black");
    setTextColor("black");
  };
  const handleColorWhite = () => {
    setBackgroundColor("white");
    setLogoColor("black");
    setTextColor("black");
  };
  const handleColorBlack = () => {
    setBackgroundColor("#1c1c1c");
    setLogoColor("white");
    setTextColor("white");
  };

  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      <div className="col-sm-12 col-xm-12">
        <div className="row">
          <div
            className="col-sm-2 col-xm-12 shadow"
            style={{ paddingLeft: "0", paddingRight: "0" }}
          >
            {" "}
            <LeftSideBar logoColor={logoColor} textColor={textColor} />
          </div>
          <div className="col-sm-10 col-xm-12">
            {totState !== undefined ? (
              <Topbar totState={totState} india={india} textColor={textColor} />
            ) : (
              <Spinner color="success" />
            )}

            <div className="col-sm-12 border">
              <div className="row">
                <div className="col-sm-6">
                  <div className="mt-5" style={{ fontSize: "40px" }}>
                    <Pie data={state.dataPie} options={{ responsive: true }} />
                  </div>
                </div>
                <div className="col-sm-6">
                  {" "}
                  <StateWise color={textColor} stateApi={stateApi} />
                </div>
              </div>
            </div>
            <div className="col-sm-12 border mt-3">
              <div className="row">
                {stateApi === undefined ? (
                  <Spinner color="success" />
                ) : (
                  // <Spinner color="success" />
                  <BarChart stateApi={stateApi} />
                )}
              </div>
            </div>
            <div className="col-sm-12 border mt-3">
              <div className="row">
                <StateWise color={textColor} stateApi={stateApi} />
              </div>
            </div>
            <div className="col-sm-12 mt-3">
              <Theme
                handleColorYellow={handleColorYellow}
                handleColorWhite={handleColorWhite}
                handleColorBlack={handleColorBlack}
                textColor={textColor}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
