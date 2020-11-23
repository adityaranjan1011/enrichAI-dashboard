import React, { Component } from "react";
import "./Dashboard.css";
import PowerOff from "../../asset/power-off.svg";
import PowerOn from "../../asset/power-on.svg";
import Generaterdetails from "../Generaterdetails/Generaterdetails";
import DashboardAlarm from '../DashboardAlarm/DashboardAlarm';
import HomeIcon from "../../asset/home.svg";
import Map from '../../asset/map.png';

class Dashboard extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className="Dashboard">
        <div className="dashboard-container">
          <div className="dashboard-header">
            <div className="header-tiles">
              <div className="tiles">
                <p className="tiles-content">
                  <img src={HomeIcon} alt="icon" />
                  <div className="content">
                    <span>TOTAL GENERATER</span>
                    <span>200</span>
                  </div>
                </p>
              </div>
              <div className="tiles">
                <p className="tiles-content">
                  <img src={PowerOn} alt="icon" />
                  <div className="content">
                    <span>ON GENERATOR</span>
                    <span>180</span>
                  </div>
                </p>
              </div>
              <div className="tiles">
                <p className="tiles-content">
                  <img src={PowerOff} alt="icon" />
                  <div className="content">
                    <span>OFF GENERATOR</span>
                    <span>20</span>
                  </div>
                </p>
              </div>
            </div>
            <div className="dashboard-map">
              <div className="map-board">
                <img src={Map} alt="Map Location" style={{width:'700px',height:'320px'}}/>
              </div>
            </div>
          </div>
          <div className="dashboard-sider">
            <Generaterdetails />
          </div>
        </div>

        <div className="footer-content">
          <DashboardAlarm />
        </div>
      </div>
    );
  }
}

export default Dashboard;
