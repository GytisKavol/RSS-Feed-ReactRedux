import {
  SUCCESS_URLS_RESULT,
  FAILURE_RESULT,
  REQUEST_URLS,
  DELETE_URL,
  ADD_FILTER
} from "../constants";

const initialState = {
  urls: [],
  stateUrls: "",
  isFetching: false,
  isLoaded: false
};

function urlReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_URLS_RESULT:
      return {
        ...state,
        isFetching: false,
        urls: action.urls,
        isLoaded: true
      };
    case FAILURE_RESULT:
      return {
        isFetching: false,
        error: action.error
      };
    case REQUEST_URLS:
      return {
        ...state,
        isFetching: true
      };
    case DELETE_URL:
      return {
        ...state,
        urls: state.urls.filter(url => url._id !== action.payload)
      };
    case ADD_FILTER:
      return {
        ...state,
        urls: action.urls
      };
    default:
      return state;
  }
}
export default urlReducer;
