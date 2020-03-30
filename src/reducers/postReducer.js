import {
  REQUEST_POSTS,
  FETCH_POSTS,
  FETCH_FILTERED_POSTS,
  NEW_POST,
  CLICK_FILTER,
  CLICK_MORE_THAN_ZERO,
  FETCH_KEYWORD
} from "../constants";

const initialState = {
  items: [],
  keywords: [],
  itemsFiltered: [],
  post: {},
  clickFilter: true,
  isFetching: false,
  isLoaded: false,
  clickMoreThanZero: true
};

function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_KEYWORD:
      return {
        ...state,
        keywords: action.payload
      };
    case FETCH_POSTS:
      return {
        ...state,
        isFetching: false,
        items: action.posts,
        isLoaded: true
      };
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_FILTERED_POSTS:
      return {
        ...state,
        isFetching: false,
        itemsFiltered: action.postsFiltered
      };
    case CLICK_FILTER:
      return {
        ...state,
        clickFilter: !state.clickFilter
      };
      case CLICK_MORE_THAN_ZERO:
      return {
        ...state,
        clickMoreThanZero: !state.clickMoreThanZero
      };
    case NEW_POST:
      return {
        ...state,
        post: action.payload
      };
    default:
      return state;
  }
}
export default postReducer;
