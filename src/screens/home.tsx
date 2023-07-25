import React, { Component } from "react";
import "../styles/ho.css";
import HomeOverview from "../components/homeOverview";
import HomeComparison from "../components/homeComparison";
import HomeSpatialInfo from "../components/homeSpatialInfo";
import HomeOpenQueries from "../components/homeOpenQueries";
import HomeUploadPopup from "../components/homeUploadPopup";

export default class HomeScreen extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      page: 0,
      showUploadPop: false,
      loading: false,
    };
  }
  render() {
    const { page, showUploadPop }: any = this.state;
    const setState = (v: any) => this.setState(v);
    return (
      <div className="hoB">
        <div className="hoBa">
          <div className="hoBaB">
            <div className="hoBaBa" />
            <div className="hoBaBb">Underwriting Assestent</div>
          </div>
          <div className="hoBaC" />
        </div>
        <div className="hoBc">
          <div className="hoBcA">Welcome Alex,</div>
          <div className="hoBcB">
            <div className="hoBcBc">
              <div
                onClick={() => setState({ page: 0 })}
                className={
                  "hoBcBcA" + (page === 0 ? "_ _" : " ") + "hoICoverview"
                }
              >
                Overview
              </div>
              <div
                onClick={() => setState({ page: 1 })}
                className={
                  "hoBcBcA" + (page === 1 ? "_ _" : " ") + "hoICcheckbox"
                }
              >
                Submission Comparison
              </div>
              <div
                onClick={() => setState({ page: 2 })}
                className={"hoBcBcA" + (page === 2 ? "_ _" : " ") + "hoICearth"}
              >
                Geo Spatial information
              </div>
              <div
                onClick={() => setState({ page: 3 })}
                className={"hoBcBcA" + (page === 3 ? "_ _" : " ") + "hoICbook"}
              >
                Open Queries
              </div>
            </div>
            <div
              className="hoBcBd"
              onClick={() => setState({ showUploadPop: true })}
            >
              Upload Document
            </div>
          </div>
        </div>
        {page === 0 ? <HomeOverview /> : null}
        {page === 1 ? <HomeComparison /> : null}
        {page === 2 ? <HomeSpatialInfo /> : null}
        {page === 3 ? <HomeOpenQueries /> : null}
        {showUploadPop ? (
          <HomeUploadPopup setState={setState} state={this.state} />
        ) : null}
      </div>
    );
  }
}
