import React, { Component } from "react";
import "./DashboardAlarm.css";
import Button from "@material-ui/core/Button";
import Data from "../../asset/data.json";
import Pagination from '../Pagination/Pagination';
import AlarmIcon from "../../asset/alarm.svg";
import DownloadIcon from "../../asset/download.svg";
import Battery50Icon from '@material-ui/icons/Battery50';

class DashboardAlarm extends Component {
  constructor(props){
  super(props);
  this.state = {
    dataValue:Data,
      pagePerData: 6,
      currentPage: 1,
      setcurrentPage: 1,
  };
  }

  componentWillMount(){
    this.setState({
      dataValue:Data
    });
    console.log(this.state.dataValue);
  }
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}
  paginate = (pageNumber) => {
    // console.log(pageNumber, "asdfasd");
    this.setState({
      currentPage: pageNumber,
    });
  };

  render() {
    const numrows = this.state.dataValue.data;
    
    //pagination formula
    const indexOfLastPage = this.state.currentPage * this.state.pagePerData;
    const indexOfFirstPage = indexOfLastPage - this.state.pagePerData;
    const numrowsdata = numrows.slice(indexOfFirstPage, indexOfLastPage);
    console.log("nmberof rows",numrows.length,numrowsdata);
   
    return (
      <div className="DashboardAlarm">
        <div className="alarm-box">
          <span> Recent Alarms</span>
          <div className="btn-box">
            <input
              className="search-boxes"
              type="text"
              placeholder="Search by generater id"
            />
            <Button variant="contained" color="primary">
              <img src={DownloadIcon} alt="icon"  />
              Download
            </Button>
          </div>
        </div>
        <div className="details">
          <div className="details-title">
          <div>
              <span>Alarm Id</span>
            </div>
            <div>
              <span>Date and Time</span>
            </div>
            <div>
              <span>Generator Id</span>
            </div>
            <div>
              <span>Parameter</span>
            </div>
            <div>
              <span>Value</span>
            </div>
            <div>
              <span>Alarm Type</span>
            </div>
            
            <div>
              <span>Manual Close</span>
            </div>
          </div>


          <div className="details-row" >
            {numrowsdata.map((ele) => {
              return (
                <div className="details-content">          
                <div className="content-value">
                  <span>{ele.alarmid}</span></div>
                <div className="content-value"><span>{ele.dateandtime}</span></div>
                <div className="content-value"><span>{ele.generatorid}</span></div>
                <div className="content-value">
                  <span>{ele.parameter}</span> 
                  </div>
                <div className="content-value"><span>{ele.value}</span></div>
                <div className="content-value">
                  {/* {ele.alarmtype === 'Critical' ? 'red'} */}
                  <div className={ele.alarmtype === 'Critical' ? 'alarmtype':'major'} >
                    {ele.alarmtype}
                    </div>
                  </div>
                <div className="content-value">
                 {ele.manualType === "Active" ?
                   <div className="value-box">
                     <div style={{height:'6px',width:'1px',borderRadius:'20px',backgroundColor:"green",paddingLeft:'5px',position:'relative',top:'13px'}}></div>
                   <span style={{paddingLeft:'10px'}}>{ele.manualType}</span>
                     </div>  :
                    <div className="value-box">
                      <img src={AlarmIcon} alt="alarm" style={{height:'11px',paddingRight:'5px',position:'relative',top:'10px'}}/>
                      <span>{ele.manualType}</span>
                      </div>
                }               
                  </div>
              </div>
              )
            })}         
          </div>
          <div className="pagenumber">
            <Pagination 
             postPerData={this.state.pagePerData}
             totalData={numrows.length}
             paginate={this.paginate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardAlarm;
