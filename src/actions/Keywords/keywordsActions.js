import { NEW_KEYWORD, FETCH_KEYWORD, DELETE_KEYWORD } from "../../constants";
import fetch from "isomorphic-fetch";
import axios from "axios";
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
//
//POST KEYWORD
//
export const createKeyword = keywordData => dispatch => {
  console.log(keywordData);
  fetch("http://localhost:5000/keywords", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },

    body: JSON.stringify(keywordData)
  })
    .then(res => res.json())
    .then(keyword =>
      dispatch({
        type: NEW_KEYWORD,
        payload: keyword
      })
    );
};

//
//DELETE KEYWORD
//
export function deleteKeyword(id) {
  try {
    axios.delete(`http://localhost:5000/keywords/${id}`);
    return dispatch =>
      dispatch({
        type: DELETE_KEYWORD,
        payload: id
      });
  } catch (err) {
    return dispatch =>
      dispatch({
        type: "KEYWORD_ERROR",
        payload: err.response.data.error
      });
  }
}
