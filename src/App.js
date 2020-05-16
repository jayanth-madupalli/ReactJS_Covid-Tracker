import React from "react";
import { Cards, Chart, CountryTable } from "./components";
import { fetchData } from "./api";
import { Spinner } from "react-bootstrap";
import "./App.css";
class App extends React.Component {
  state = {
    data: null,
  };
  async componentDidMount() {
    const fdata = await fetchData();
    this.setState({
      data: fdata,
    });
    console.log(fdata);
  }
  render() {
    return this.state.data ? (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <p
            className="navbar-brand w-100 text-center pt-3"
            style={{ fontSize: 22 + "px" }}
          >
            Covid Tracker
          </p>
        </nav>
        <div className="container">
          <div className="row w-100 mt-5 justify-content-center">
            <h4 className="col-12 text-center">Global</h4>
            <hr className="w-50" />
          </div>
          <div class="row w-100 justify-content-center">
            <Cards data={this.state.data.global} />
          </div>
          <div className="row w-100 mt-5 justify-content-center">
            <h4 className="col-12 text-center">India</h4>
            <hr className="w-50" />
          </div>
          <div className="row w-100 justify-content-center">
            <Cards data={this.state.data.isummary} />
          </div>
        </div>
        <div className="w-100 text-center mt-5 pt-5">
          <hr className="w-50" />
          <p className="text-muted" style={{ fontSize: 12 + "px" }}>
            Developed by JayanthM
          </p>
        </div>
      </>
    ) : (
      <div className="container">
        <Spinner className="spin" animation="grow" />
      </div>
    );
  }
}

export default App;
