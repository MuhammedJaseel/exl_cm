import React from "react";
const testPdf = require("../assets/sample.pdf");

export default function HomeSpatialInfo({ filter, setState }: any) {
  return (
    <div className="hoD">
      <div className="hoDb">Filter by :</div>
      <div className="hoDc">
        <div className="hoDcB">
          <div className="hoDcBa">Include: </div>
          {filter.spatialInfo.include.map((it: any, k: any) => (
            <div
              className={it.selected ? "hoDcBb_" : "hoDcBb"}
              onClick={() => {
                it.selected = !it.selected;
                setState({ filter });
              }}
            >
              {it.name}
            </div>
          ))}
        </div>
      </div>
      <div className="hoDe" /> {/* Line */}
      <div className="hoDf">
        <div className="hoDfB">
          <div className="hoDfBa">
            <div className="hoDfBaA_">Email Body</div>
            <div className="hoDfBaA">
              Philander Energy Solutions and Marketing LLC_2.pdf
            </div>
            <div className="hoDfBaA">Philander Energy Loss Run.pell</div>
          </div>
          <div className="hoDe" /> {/* Line */}
          <div className="hoDfBb">
            {" "}
            <iframe
              src={testPdf}
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
        <div className="hoDfC">
          <div className="hoDfCa">
            <div className="hoDfCaA">Some Details about insured post code</div>
            <div className="hoDfCaB">
              <div className="hoDfCaBa">
                <i style={{ color: "red" }}>
                  TB provided using Geo Sparial Models
                </i>
              </div>
              <div className="hoDfCaBe">
                Page no&nbsp;<span>&nbsp;1,</span>
                <span>&nbsp;2,</span>
                &nbsp;...
                <span>&nbsp;5</span>
              </div>
            </div>
          </div>
          <div className="hoDfCa">
            <div className="hoDfCaA">
              Can you tell something about this Company
            </div>
            <div className="hoDfCaB">
              <div className="hoDfCaBa">
                <i style={{ color: "red" }}>
                  TB provided using Geo Sparial Models
                </i>
              </div>
              <div className="hoDfCaBe">
                Page no&nbsp;<span>&nbsp;1,</span>
                <span>&nbsp;2,</span>
                &nbsp;...
                <span>&nbsp;5</span>
              </div>
            </div>
          </div>
          <div className="hoDfCa">
            <div className="hoDfCaA">
              What is the building name near to Insured post code
            </div>
            <div className="hoDfCaB">
              <div className="hoDfCaBa">
                <i style={{ color: "red" }}>
                  TB provided using Geo Sparial Models
                </i>
              </div>
              <div className="hoDfCaBe">
                Page no&nbsp;<span>&nbsp;1,</span>
                <span>&nbsp;2,</span>
                &nbsp;...
                <span>&nbsp;5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
