import React, { Component } from "react";
import config from "./config.json";
import axios from "axios";
import { Link } from 'react-router-dom';

class ShowData extends Component {
  state = {
    data: [],
    orignaldata:[]
  };

  async componentDidMount() {
    const promise = axios.get(config.apiEndPoint);
    const response = await promise;
    this.setState({orignaldata:response.data});
    if(!this.props.value){
      const updated=this.state.orignaldata;
      this.setState({data:updated});
  }else{
    const updated=this.state.orignaldata.filter((item) => item.sport === this.props.value);
    this.setState({data:updated});
  }
    
  }

  componentDidUpdate(prevProps){
      if(prevProps.value!==this.props.value){
          if(!this.props.value){
              const updated=this.state.orignaldata;
              this.setState({data:updated});
          }else{
            const updated=this.state.orignaldata.filter((item) => item.sport === this.props.value);
            this.setState({data:updated});
          }
      }
  }

  render() {
    const { data } = this.state;
    
    return (
      <React.Fragment>
        <div className="container">
          <div className="row bg-primary text-center font-weight-bold">
            <div className="col-4  border">
              <span>Name</span>
            </div>
            <div className="col-4 border">
              <span>Country</span>
            </div>
            <div className="col-4 border">
              <span>Sports</span>
            </div>
          </div>
          {data.map((item) => {
            return (
              <div className="row text-center" key={item.id}>
                <div className="col-4  border">
                  <Link to={"/details/"+item.id}>{item.name}</Link>
                </div>
                <div className="col-4 border">
                  <span>{item.country}</span>
                </div>
                <div className="col-4 border">
                  <span>{item.sport}</span>
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default ShowData;
