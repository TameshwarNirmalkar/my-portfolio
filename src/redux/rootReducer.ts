import { combineReducers } from "redux";

import commentsReducer from "@store/comments";

export default combineReducers({
  comments: commentsReducer,
});
