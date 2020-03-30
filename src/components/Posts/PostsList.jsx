import React, { Component } from "react";

import FilteredPost from "./FilteredPost";
import UnfilteredPost from "./UnfilteredPost";
export default class Posts extends Component {
  componentDidMount() {
    this.props.onHandleGetPosts();
    this.props.onHandleGetKeywords();
  }

  render() {
    const unfilteredItems = this.props.posts.map((item, index) => (
      <UnfilteredPost
        link={item.link}
        title={item.title}
        desc={item.desc}
        key={index}
      />
    ));
    // eslint-disable-next-line
    const postFilteredItems = this.props.postsFiltered.map((item, index) => {
      if (item.filterArray.length > 0 && !this.props.clickMoreThanZero) {
        return (
          <FilteredPost
            key={index}
            filter2={item.filter}
            articleNumber={item.articleNumber}
            title={item.filterArray.map(item => item.title)}
            filterArray={item.filterArray}
          />
        );
      } else if (item.filterArray.length >= 0 && this.props.clickMoreThanZero) {
        return (
          <FilteredPost
            key={index}
            filter2={item.filter}
            articleNumber={item.articleNumber}
            title={item.filterArray.map(item => item.title)}
            filterArray={item.filterArray}
          />
        );
      }
    });
    const showButton = (
      <button onClick={this.props.MoreThanZero}>
        {this.props.clickMoreThanZero
          ? `Filter zero values`
          : `Unfilter zero values`}
      </button>
    );
    return (
      <div>
        <h1>Posts</h1>
        <button onClick={this.props.Filter}>
          {this.props.clickFilter ? `Filter` : `Show all posts`}
        </button>
        {!this.props.clickFilter ? showButton : null}
        {this.props.isLoaded && this.props.clickFilter
          ? unfilteredItems
          : postFilteredItems}
      </div>
    );
  }
}
