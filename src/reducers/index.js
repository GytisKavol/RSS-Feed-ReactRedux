import { combineReducers } from "redux";
import postReducer from "./postReducer";
import urlReducer from "./urlReducer";
import keywordReducer from "./keywordReducer";
import { reducer as formReducer } from "redux-form";
import { NEW_POST, NEW_KEYWORD } from "../constants";

const allReducers = combineReducers({
  postsR: postReducer,
  urlsR: urlReducer,
  keywordsR: keywordReducer,
  form: formReducer.plugin({
    contact: (state, action) => {
      switch (action.type) {
        case NEW_POST:
          return undefined;
        case NEW_KEYWORD:
          return undefined;
        default:
          return state;
      }
    }
  })
});

export default allReducers;
