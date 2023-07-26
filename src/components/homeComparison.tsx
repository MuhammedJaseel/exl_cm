const testPdf = require("../assets/sample.pdf");

export default function HomeComparison({ filter, setState }: any) {
  return (
    <div className="hoD">
      <div className="hoDb">Filter by :</div>
      <div className="hoDc">
        <div className="hoDcB">
          {filter.comparison.map((it: any, k: any) => (
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
            <iframe
              src={testPdf}
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
        <div className="hoDfC">
          <div className="hoDfCb">Submission vs System data Comparison</div>
          <div className="hoDfCc">
            <div className="hoDfCcA">
              <div className="hoDfCcAa">Field</div>
              <div className="hoDfCcAb">System Data</div>
              <div className="hoDfCcAc">Attachments</div>
              <div className="hoDfCcAd">Decision</div>
              <div className="hoDfCcAe">Page No</div>
            </div>
            <div className="hoDfCcB">
              <div className="hoDfCcBa">Field</div>
              <div className="hoDfCcBb">System Data</div>
              <div className="hoDfCcBc">Attachments</div>
              <div className="hoDfCcBd">Decision</div>
              <div className="hoDfCcBe">Page No</div>
            </div>
          </div>
          <div className="hoDfCa">
            <div className="hoDfCaA">
              Compare Contents between Email body and attochments
            </div>

            <div className="hoDfCaB">
              <div className="hoDfCaBa" style={{ maxHeight: 320 }}>
                Insured name in Email body Is "Philander Energy Sclutions"
                whereas in attochment is *Philander group Lic* insured oddress
                Postcode mentioned in Emoil boor is -POI8 762* whoroas in
                attachment is "POIS 702".
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
