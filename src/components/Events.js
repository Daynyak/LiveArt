import React from "react";
import "./components.css";
import * as Api from "typescript-fetch-api";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import moment from "moment";

const api = new Api.DefaultApi();

class Evevnts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
    this.handleReload = this.handleReload.bind(this);
    this.handleReload();
  }

  async handleReload(event) {
    const response = await api.events();
    this.setState({ events: response });
  }

  render() {
    return (
      <div class="museums-wrapper">
        <h2 class="museums-search-title">
          Actual webinars on {moment().format("DD.MM.YYYY")}
        </h2>
        <p class="museums-search-subtitle">
          Take part in the most interesting events, raise your level of intelligence.
          communicate with experienced speakers. This and more can be found at
          the events below
        </p>
        <div class="museums-cards-container">
          {this.state.events.map((event) => (
            <div class="museums-card">
              <Link to={`/events/${event.name}`}>
                <img
                  src={event.image}
                  alt="museum"
                  class="museums-image"
                ></img>
              </Link>
              <div class="museums-description-container">
                <Link to={`/events/${event.name}`}>
                  <p class="museums-description-title">
                    "{event.name}" Webinar
                  </p>
                </Link>
                <p class="useum-description-item">
                  Price {event.price}$
                </p>
                <p class="museums-description-sport">
                  Organizer: {event.organizer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Evevnts);
