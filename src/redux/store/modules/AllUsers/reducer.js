import Database from "../../../../services/Database";

import { ADD_USER } from "../../../../actions/actionTypes";

const DatabaseUserReducer = (state = Database.users, action) => {
  switch (action.type) {
    case ADD_USER:
      const { newUser } = action;

      return [...state, newUser];

    default:
      return state;
  }
};

export default DatabaseUserReducer;
