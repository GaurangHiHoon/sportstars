import React, { Component } from "react";
import config from "./config.json";
import axios from "axios";
import { Link } from "react-router-dom";

class ShowDetails extends Component {
  state = { data: [] };

  async componentDidMount() {
    const promise = axios.get(config.apiEndPoint);
    const response = await promise;
    const data = response.data.filter(
      (item) => item.id === this.props.match.params.id
    );
    this.setState({ data: data });
  }

  render() {
    return (
      <div className="container-fluid">
        {this.state.data.length === 0 ? (
          ""
        ) : (
          <div className="ml-4">
            <h5>{this.state.data[0].name}</h5>
            <h6>Date Of Birth:{this.state.data[0].details.DOb}</h6>
            <h6>Sports:{this.state.data[0].sport}</h6>
            <h6>Country:{this.state.data[0].country}</h6>
            <p>{this.state.data[0].details.Info}</p>

            <Link to={"/stars/" + this.state.data[0].sport}>
              Click Here for {this.state.data[0].sport}
            </Link>
          </div>
        )}
      </div>
      //
    );
  }
}

export default ShowDetails;
