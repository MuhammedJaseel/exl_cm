import React from "react";
const testPdf = require("../assets/sample.pdf");

export default function HomeOpenQueries({ filter }: any) {
  return (
    <div className="hoD">
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
          <iframe
              src={testPdf}
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
        <div className="hoDfC">
          <div className="hoDfCd">
            <div className="hoDfCdA">
              <div className="hoDfCdAa">
                <div className="hoDfCdAaA">
                  Is the broker a part of our de- prioritized brokers list?
                </div>
                <div className="hoDfCdAaB">
                  No. The broker is not in our de prioritised brokers list
                </div>
              </div>
              <div className="hoDfCdAa">
                <div className="hoDfCdAaA">
                  Do all the buildings have fire sprinklers?
                </div>
                <div className="hoDfCdAaB">
                  No, 404 buildings out ol 627 don't have fire sprinklers
                </div>
              </div>
              <div className="hoDfCdAa">
                <div className="hoDfCdAaA">
                  How much have we generally quoted for this type of business?
                </div>
                <div className="hoDfCdAaB">
                  Dosis post trend and dato we generally quote in the range of
                  EXX-EVY
                </div>
              </div>
              <div className="hoDfCdAa">
                <div className="hoDfCdAaA">
                  Create a summary of which industry classes were declined?
                </div>
                <div className="hoDfCdAaB">
                  Following is the summary of industry classes that were
                  declined - Glass Manuloctures 20% Long Term Core 10%;
                  Habitational 10%.
                </div>
              </div>
            </div>
            <form className="hoDfCdB">
              <input placeholder="Ask Your Question" />
              <button className="hoDfCdB" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
