import React, { Component } from "react";
import Url from "./Url";
export default class UrlsList extends Component {
  componentDidMount() {
    this.props.onHandleGetURL();
  }
  render() {
    return (
      <>
        <h1>Links</h1>
        <ul>
          {this.props.urls.map(item => (
            <Url            
              deleteUrl={this.props.onHandleDeleteUrl}
              key={item._id}
              id={item._id}
              url={item.url}
            />
          ))}
        </ul>
      </>
    );
  }
}
