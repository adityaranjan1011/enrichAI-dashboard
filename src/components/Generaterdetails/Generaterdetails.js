import React, { Component } from "react";
import "./Generaterdetails.css";
// import SearchBar from "material-ui-search-bar";
import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";
import Search from "../../asset/search.svg";
import SettingICon from "../../asset/setting.svg";

import ChatIcon from "../../asset/chat.svg";
import AnalyticsIcon from "../../asset/analytics.svg" ;
class Generaterdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      device: "",
    };
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}
  handleChange = (event) => {
    //  let name = event.target.name;
    this.setState({
      device: event.target.value,
    });
  };
  render() {
    return (
      <div className="Generaterdetails">
        <div className="sider-searching">
          {/* <Searchbar
    value={this.state.value}
    onChange={(newValue) => this.setState({ value: newValue })}
    // onRequestSearch={() => doSomethingWith(this.state.value)}
  /> */}
          <div className="icon">
            <img className="image" src={Search} alt="search" />
          <input
            className="search-box"
            type="text"
            placeholder="Search by generater id"
          />
          </div>
         
          <FormControl className="drop-box">
            <NativeSelect
              value={this.state.device}
              onChange={this.handleChange}
              name="device"
              // className={classes.selectEmpty}
              inputProps={{ "aria-label": "device" }}
            >
              <option value="">All Devices</option>
              <option value={10}>Generater</option>
              <option value={20}>AutoGenerater</option>
              <option value={30}>Generater off</option>
            </NativeSelect>
            {/* <FormHelperText>With visually hidden label</FormHelperText> */}
          </FormControl>
        </div>
        <div className="sider-detail">
          <div className="sider-content">
            <div className="sider-box" >
              <img src={SettingICon} alt="setting" style={{height:'11px'}} />
              <div className="content-text">
              <span>Generater id</span>
              <span className="text">NHT87898</span>
              </div>              
            </div>
            <div className="content-text">
              <span>Status</span>
              <span className="text">On</span>
            </div>
            <div className="sider-box">
              <img src={SettingICon} alt="alarmicon"  style={{height:'11px'}} />
              <div className="content-text">
              <span>Active Alarm</span>
              <span className="text" style={{ color: "green" }}>
                Yes
              </span>
             </div>
            </div>
            <div className="sider-box">
             <img src={AnalyticsIcon} alt="ana" style={{height:'11px'}} />
             <div className="content-text">
              <span>Running</span>
              <span className="text">Yes</span>
             </div>
            </div>
          </div>
          <div className="sider-boxes">
            <img src={ChatIcon} alt ="chat"  style={{height:'11px'}}/>
          <div className="read">
            <span>Last message read</span>
            <span className="msg">20th sep, 10 AM</span>
          </div>
          </div>
         
          <div className="fuel">
            <div className="vol">
              <span>Fuel Volume</span>
              <span className="msg">30%</span>
            </div>
            <div>
              <Button variant="contained" color="secondary">
                View
              </Button>
            </div>
          </div>
        </div>

        <div className="sider-detail">
          <div className="sider-content">
          <div className="sider-box" >
              <img src={SettingICon} alt="setting" style={{height:'11px'}} />
              <div className="content-text">
              <span>Generater id</span>
              <span className="text">NHT87898</span>
              </div>              
            </div>
            <div className="content-text">
              <span>Status</span>
              <span className="text">On</span>
            </div>
            <div className="sider-box">
              <img src={SettingICon} alt="alarmicon"  style={{height:'11px'}} />
              <div className="content-text">
              <span>Active Alarm</span>
              <span className="text" style={{ color: "green" }}>
                Yes
              </span>
             </div>
            </div>
            <div className="sider-box">
             <img src={AnalyticsIcon} alt="ana" style={{height:'11px'}} />
             <div className="content-text">
              <span>Running</span>
              <span className="text">Yes</span>
             </div>
            </div>
          </div>
          <div className="sider-boxes">
            <img src={ChatIcon} alt ="chat"  style={{height:'11px'}}/>
          <div className="read">
            <span>Last message read</span>
            <span className="msg">20th sep, 10 AM</span>
          </div>
          </div>
          <div className="fuel">
            <div className="vol">
              <span>Fuel Volume</span>
              <span className="msg">30%</span>
            </div>
            <div>
              <Button variant="contained" color="secondary">
                View
              </Button>
            </div>
          </div>
        </div>

        <div className="sider-detail">
          <div className="sider-content">
          <div className="sider-box" >
              <img src={SettingICon} alt="setting" style={{height:'11px'}} />
              <div className="content-text">
              <span>Generater id</span>
              <span className="text">NHT87898</span>
              </div>              
            </div>
            <div className="content-text">
              <span>Status</span>
              <span className="text">On</span>
            </div>
            <div className="sider-box">
              <img src={SettingICon} alt="alarmicon"  style={{height:'11px'}} />
              <div className="content-text">
              <span>Active Alarm</span>
              <span className="text" style={{ color: "green" }}>
                Yes
              </span>
             </div>
            </div>
            <div className="sider-box">
             <img src={AnalyticsIcon} alt="ana" style={{height:'11px'}} />
             <div className="content-text">
              <span>Running</span>
              <span className="text">Yes</span>
             </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Generaterdetails;
