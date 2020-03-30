import { FETCH_POSTS, FETCH_FILTERED_POSTS, REQUEST_POSTS,FETCH_KEYWORD} from "../../constants";
import fetch from "isomorphic-fetch";
function requestPosts() {
  return {
    type: REQUEST_POSTS
  };
}
//
//GET KEYWORDS
//
export const fetchKeywords = () => dispatch => {
  fetch("http://localhost:5000/keywords")
    .then(res => res.json())
    .then(keywords =>
      dispatch({
        type: FETCH_KEYWORD,
        payload: keywords.data
      })
    );
};
//GET POSTS
//
export function fetchPosts() {
  return dispatch => {
    dispatch(responsePosts());
  };
}
function postsResult(posts) {
  return {
    type: FETCH_POSTS,
    posts
  };
}
function responsePosts() {
  return dispatch => {
    dispatch(requestPosts());
    return fetch("http://localhost:5000/articles")
      .then(res => res.json())
      .then(posts => dispatch(postsResult(posts.data)));
  };
}
//
//GET FILTERED POSTS
//
export function fetchFilteredPosts() {
  return dispatch => {
    dispatch(responseFilteredPosts());
  };
}
function postsFilteredResult(postsFiltered) {
  return {
    type: FETCH_FILTERED_POSTS,
    postsFiltered
  };
}
function responseFilteredPosts() {
  return dispatch => {
    dispatch(requestPosts());
    return fetch("http://localhost:5000/articlesFiltered")
      .then(res => res.json())
      .then(postsFiltered => dispatch(postsFilteredResult(postsFiltered.data)));
  };
}
