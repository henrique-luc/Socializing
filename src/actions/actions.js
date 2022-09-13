import { ADD_USER, REM_POST, ADD_POST, EDIT_POST } from "./actionTypes";

export const addUser = (newUser) => ({
  type: ADD_USER,
  newUser,
});

export const addPost = (newPost) => ({
  type: ADD_POST,
  newPost,
});

export const removePost = (remPost) => ({
  type: REM_POST,
  remPost,
});

export const editOnePost = (modifiedPost) => ({
  type: EDIT_POST,
  modifiedPost,
});
