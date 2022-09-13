import Database from "../../../../services/Database";

import { ADD_POST, EDIT_POST, REM_POST } from "../../../../actions/actionTypes";

const DatabasePostReducer = (state = Database.posts, action) => {
  switch (action.type) {
    case ADD_POST:
      const { newPost } = action;
      return [...state, newPost];

    case REM_POST:
      const { remPost } = action;
      return remPost;

    case EDIT_POST:
      const { modifiedPost } = action;
      const updatedPosts = state.map((post) => {
        if (post.id === modifiedPost.id) {
          return modifiedPost;
        } else {
          return post;
        }
      });
      return updatedPosts;

    default:
      return state;
  }
};

export default DatabasePostReducer;
