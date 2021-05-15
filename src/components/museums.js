import React from "react";
import "./components.css";
import * as Api from "typescript-fetch-api";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import moment from "moment";

const api = new Api.DefaultApi();

class museums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      museums: [],
    };
    this.handleReload = this.handleReload.bind(this);
    this.handleReload();
  }

  async handleReload(event) {
    const response = await api.museums();
    this.setState({ museums: response });
  }

  render() {
    return (
      <div class="museums-wrapper">
        <h2 class="museums-search-title">
          Free museums on {moment().format("DD.MM.YYYY")}
        </h2>
        <p class="museums-search-subtitle">
          Find your own museum that will appeal to you, a variety of
          parameters will help you make a choice. Coverage, size, capacity,
          address, choose what your heart desires
        </p>
        <div class="museums-cards-container">
          {this.state.museums.map((museum) => (
            <div class="museums-card">
              <Link to={`/museums/${museum.name}`}>
                <img
                  src={museum.image}
                  alt="museum"
                  class="museums-image"
                ></img>
              </Link>
              <div class="museums-description-container">
                <Link to={`/museums/${museum.name}`}>
                  <p class="museums-description-title">
                    museum "{museum.name}"
                  </p>
                </Link>
                <p class="museums-description-adress">
                  Adress: {museum.address}
                </p>
                <p class="museums-description-sport">
                  Type of sport: {museum.sport}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(museums);
