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
      event: [],
      targetEvent: id,
    };
    this.handleReload = this.handleReload.bind(this);
    this.handleReload();
  }

  async handleReload(event) {
    const response = await api.event({
      event: this.state.targetEvent,
    });
    this.setState({ event: response });
  }

  render() {
    return (
      <div class="museum">
        {this.state.event.map((event) => (
          <div class="museum-info">
            {" "}
            <h2 class="museum-title">Event "{event.name}"</h2>
            <div class="museum-desc">
              <div>
                Не ставьте незачет пожалуйста мы старались!!!!
                </div>
              <img
                src={event.image}
                alt="museum"
                class="museum-image"
              ></img>
              <div class="museum-description-container">
                <h3 class="museum-description-det">Detailed information</h3>
                <ul class="museum-description-list">
                  <li class="museum-description-item">
                    Adress: {event.address}
                  </li>
                  <li class="museum-description-item">
                    Type of art: {event.sport}
                  </li>
                  <li class="museum-description-item">
                    Organizer: {event.organizer}
                  </li>
                  <li class="museum-description-item">
                    Price: {event.price} $
                  </li>
                  <li class="museum-description-item">
                    Seats: {event.seats}
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
