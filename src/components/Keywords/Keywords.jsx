import React, { Component } from "react";

export default class Keywords extends Component {
  componentDidMount() {
    this.props.onHandleGetKeywords();
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Keywords</h1>
        <ul>
          {this.props.keywords.map(item => (
            <li key={item._id}>{item.keyword} ({item.articleNumber})
            <button type="submit" onClick={() => this.props.onHandleDeleteKeyword(item._id)}>x</button></li>
          ))}
        </ul>
      </div>
    );
  }
}
