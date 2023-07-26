import React from "react";
const testPdf = require("../assets/sample.pdf");

export default function HomeOverview({ filter, setState }: any) {
  return (
    <div className="hoD">
      <div className="hoDb">Filter by :</div>
      <div className="hoDc">
        <div className="hoDcB">
          <div className="hoDcBa">Length: </div>
          {filter.overView.length.map((it: any, k: any) => (
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
          <div className="hoDcBc" />
          <div className="hoDcBa">Include: </div>
          {filter.overView.include.map((it: any, k: any) => (
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
        <div className="hoDcC">Generate Summary</div>
      </div>
      <div className="hoDe" /> {/* Line */}
      <div className="hoDf">
        <div className="hoDfB">
          <div className="hoDfBa">
            <div className="hoDfBaA">Email Body</div>
            <div className="hoDfBaA">
              Philander Energy Solutions and Marketing LLC_2.pdf
            </div>
            <div className="hoDfBaA_">Philander Energy Loss Run.pell</div>
          </div>
          <div className="hoDe" /> {/* Line */}
          <div className="hoDfBb">
            <iframe
              src={testPdf}
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
        <div className="hoDfC">
          <div className="hoDfCa">
            <div className="hoDfCaA">Document Summary</div>
            <div className="hoDfCaB">
              <div className="hoDfCaBa" style={{ maxHeight: 100 }}>
                To provided post running sample along with ottechments. See how
                to handle excel SON - either ignore
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
            <div className="hoDfCaA">Decline Indicator</div>
            <div className="hoDfCaB">
              <div className="hoDfCaBf">
                <div className="hoDfCaBfA">
                  <div className="hoDfCaBfAa">Industry Name</div>
                  <div style={{ background: "green" }} className="hoDfCaBfAb">
                    Pstrubur antdd Fatrachemicad irdustrp
                  </div>
                </div>
                <div className="hoDfCaBfA">
                  <div className="hoDfCaBfAa">Broker Name</div>
                  <div style={{ background: "green" }} className="hoDfCaBfAb">
                    ABC Global
                  </div>
                </div>
                <div className="hoDfCaBfA">
                  <div className="hoDfCaBfAa">Foreion Exposure</div>
                  <div style={{ background: "green" }} className="hoDfCaBfAb">
                    Tardipe Escusure
                  </div>
                </div>
                <div className="hoDfCaBfA">
                  <div className="hoDfCaBfAa">Underwriting Appetite</div>
                  <div style={{ background: "orange" }} className="hoDfCaBfAb">
                    Underricing Appetite
                  </div>
                </div>
                <div className="hoDfCaBfA">
                  <div className="hoDfCaBfAa">Foreion Exposure</div>
                  <div style={{ background: "green" }} className="hoDfCaBfAb">
                    Tardipe Escusure
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hoDfCa">
            <div className="hoDfCaA">New or renewal</div>
            <div className="hoDfCaB">
              <div className="hoDfCaBf">
                <div className="hoDfCaBfA">
                  <div style={{ background: "red" }} className="hoDfCaBfAb">
                    New
                  </div>
                </div>
                <div className="hoDfCaBfA">
                  <div style={{ background: "gray" }} className="hoDfCaBfAb">
                    Renewal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
