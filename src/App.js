import "./App.css";
import React from "react";
import museums from "components/museums";
import museum from "components/museum";
import Event from "components/Event";
import Events from "components/Events";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <header class="header">
        <Link class="header__heading" to="/">
          LiveArt
        </Link>
        <nav class="header__nav">
          <ul class="nav__list">
            <li class="nav__list-item">
              <Link class="nav__item-link" to="/museums">
                Pieces
              </Link>
            </li>
            <li class="nav__list-item">
              <Link class="nav__item-link" to="/events">
                Webinars
              </Link>
            </li>
          </ul>
        </nav>
        <button class="header__button">Sign Up</button>
      </header>
      <div className="App" class="app">
        <Switch>
          <Route path="/museums/:id">
            <museum />
          </Route>
          <Route path="/museums">
            <museums />
          </Route>
          <Route path="/events/:id">
            <Event />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/">
            <main class="main">
              {" "}
              <h2 class="main-heading">Live Museum Service</h2>
              <Link to="/museums">
                <button class="main-button">Check for pieces</button>
              </Link>
            </main>
          </Route>
        </Switch>
      </div>
      <footer class="footer">
        <div class="footer__copyright">©Не ставьте незачет пожалуйста мы старались!!!! 2021</div>
      </footer>
    </Router>
  );
}
export default App;
