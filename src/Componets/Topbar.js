import React from "react";
// import { Spinner } from "reactstrap";

function Topbar({ totState: totState, india: india, textColor: textColor }) {
  return (
    <div>
      <div className="mb-3 container">
        <div className="row state">
          <div className="active col-sm-3 shadow">
            <div class="mb-2">Active</div>
            {totState.active}
          </div>
          {textColor === "black" ? (
            <div className="confirmed col-sm-3 shadow" style={{ color: "red" }}>
              <div class="mb-2">Confirmed</div>
              {totState.confirmed} [+{totState.deltaconfirmed}]
            </div>
          ) : (
            <div
              className="confirmed col-sm-3 shadow"
              style={{ color: textColor }}
            >
              <div class="mb-2">Confirmed</div>
              {totState.confirmed}
            </div>
          )}
          <div className="recovered col-sm-3 shadow">
            <div class="mb-2">Recovered</div>
            {totState.recovered}
          </div>
          <div className="deaths col-sm-3 shadow pr-1">
            <div class="mb-2">Deaths</div>
            {totState.deaths} [+{totState.deltadeaths}]
          </div>
        </div>
        <div className="mt-3 ">
          <div className="row border">
            <div
              className="col-sm-12  text-center border"
              style={{ color: textColor }}
            >
              India
            </div>
            <div className="col-sm-12">
              <div className="row p-2">
                <div className="col-sm-3 text-center text-primary">
                  {india === undefined ? [] : india.activeCases}
                </div>
                <div className="col-sm-3 text-center text-danger">
                  {india === undefined ? [] : india.totalCases}
                  <span className="ml-2">
                    [+{india === undefined ? [] : india.activeCasesNew}]
                  </span>
                </div>
                <div className="col-sm-3 text-center text-success">
                  {india === undefined ? [] : india.recovered}
                  <span className="ml-2">
                    {" "}
                    [+{india === undefined ? [] : india.recoveredNew}]
                  </span>
                </div>
                <div className="col-sm-3 text-center text-secondary">
                  {india === undefined ? [] : india.deaths}
                  <span className="ml-2">
                    {" "}
                    [+{india === undefined ? [] : india.deathsNew}]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
