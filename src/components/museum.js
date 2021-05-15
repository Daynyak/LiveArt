import React from "react";
import "./components.css";
import * as Api from "typescript-fetch-api";
import { withRouter } from "react-router";

const api = new Api.DefaultApi();

class museum extends React.Component {
  constructor(props) {
    super(props);
    const id = this.props.match?.params.id;
    this.state = {
      museum: [],
      targetmuseum: id,
    };
    this.handleReload = this.handleReload.bind(this);
    this.handleReload();
  }

  async handleReload(event) {
    const response = await api.museum({
      museum: this.state.targetmuseum,
    });
    this.setState({ museum: response });
  }

  render() {
    return (
      <div class="museum">
        {this.state.museum.map((museum) => (
          <div class="museum-info">
            {" "}
            <h2 class="museum-title">museum "{museum.name}"</h2>
            <div class="museum-desc">
              <img
                src={museum.image}
                alt="museum"
                class="museum-image"
              ></img>
              <div class="museum-description-container">
                <h3 class="museum-description-det">Detailed information</h3>
                <ul class="museum-description-list">
                  <li class="museum-description-item">
                    Adress: {museum.address}
                  </li>
                  <li class="museum-description-item">
                    Type of sport: {museum.sport}
                  </li>
                  <li class="museum-description-item">
                    Size: {museum.size} m²
                  </li>
                  <li class="museum-description-item">
                    Capacity: {museum.capacity} human
                  </li>
                  <li class="museum-description-item">
                    Surface: {museum.surface}
                  </li>
                </ul>
                <button class="museum-button">Plot a route</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(museum);
