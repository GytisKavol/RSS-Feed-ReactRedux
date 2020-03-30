import {
  SUCCESS_URLS_RESULT,
  FAILURE_RESULT,
  NEW_POST,
  REQUEST_URLS,
  DELETE_URL
} from "../../constants";
import fetch from "isomorphic-fetch";
import axios from "axios";
//
// GET URL
//
export function fetchURL() {
  return dispatch => {
    dispatch(responseURL());
  };
}

function requestUrls() {
  return {
    type: REQUEST_URLS
  };
}
function successUrlResult(urls) {
  return {
    type: SUCCESS_URLS_RESULT,
    urls
  };
}

function failureResult(error) {
  return {
    type: FAILURE_RESULT,
    error
  };
}
function responseURL() {
  return dispatch => {
    dispatch(requestUrls());
    fetch("http://localhost:5000/urls")
      .then(res => res.json())
      .then(urls => dispatch(successUrlResult(urls.data)))
      .catch(error => {
        dispatch(failureResult(error));
      });
  };
}

//
//DELETE URL
//
export function deleteUrl(id) {
  try {
    axios.delete(`http://localhost:5000/urls/${id}`);
    return dispatch =>
      dispatch({
        type: DELETE_URL,
        payload: id
      });
  } catch (err) {
    return dispatch =>
      dispatch({
        type: "URL_ERROR",
        payload: err.response.data.error
      });
  }
}

//
//POST URL
//

export function createLink(postData) {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = axios.post("http://localhost:5000/articles", postData, config);
    return dispatch =>
      dispatch({
        type: NEW_POST,
        payload: res.config
      });
  } catch (err) {
    return dispatch =>
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: "123"
      });
  }
}
