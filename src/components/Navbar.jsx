import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Posts</Link>
        <div>
          <ul>
            <li>
              <Link to="/settings">Add Link</Link>
            </li>
            <li>
              <Link to="/keywords">Add Keyword</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
