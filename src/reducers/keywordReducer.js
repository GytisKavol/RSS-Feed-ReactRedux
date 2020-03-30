import { FETCH_KEYWORD, NEW_KEYWORD, DELETE_KEYWORD } from "../constants";

const initialState = {
  keywords: [],
  keyword: {}
};

function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_KEYWORD:
      return {
        ...state,
        keywords: action.payload
      };
    case DELETE_KEYWORD:
      return {
        ...state,
        keywords: state.keywords.filter(
          keyword => keyword._id !== action.payload
        )
      };
    case NEW_KEYWORD:
      return {
        ...state,
        keyword: action.payload
      };
    default:
      return state;
  }
}
export default postReducer;
