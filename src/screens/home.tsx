import React, { Component } from "react";
import "../styles/ho.css";
import HomeOverview from "../components/homeOverview";
import HomeComparison from "../components/homeComparison";
import HomeSpatialInfo from "../components/homeSpatialInfo";
import HomeOpenQueries from "../components/homeOpenQueries";
import HomeUploadPopup from "../components/homeUploadPopup";
import { DashboardFilter } from "../modules/home";

export default class HomeScreen extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      page: 0,
      showUploadPop: false,
      loading: false,
      filter: new DashboardFilter(),
    };
  }

  componentDidMount(): void {}

  render() {
    const { page, showUploadPop, filter }: any = this.state;
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
                className={"hoBcBcA" + (page === 1 ? "_ _" : " ") + "hoICearth"}
              >
                Geo Spatial information
              </div>
              <div
                onClick={() => setState({ page: 2 })}
                className={"hoBcBcA" + (page === 2 ? "_ _" : " ") + "hoICbook"}
              >
                Open Queries
              </div>
              <div
                onClick={() => setState({ page: 3 })}
                className={
                  "hoBcBcA" + (page === 3 ? "_ _" : " ") + "hoICcheckbox"
                }
              >
                Submission Audit
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
        {page === 0 ? (
          <HomeOverview filter={filter} setState={setState} />
        ) : null}
        {page === 1 ? (
          <HomeSpatialInfo filter={filter} setState={setState} />
        ) : null}
        {page === 2 ? (
          <HomeOpenQueries filter={filter} setState={setState} />
        ) : null}
        {page === 3 ? (
          <HomeComparison filter={filter} setState={setState} />
        ) : null}
        {showUploadPop ? (
          <HomeUploadPopup setState={setState} state={this.state} />
        ) : null}
      </div>
    );
  }
}
