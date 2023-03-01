import { concat, filter } from "lodash";
import { ADDTODO, DELETETODO } from "../action/default_action";

const InitialState = [];

const Reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADDTODO:
      return concat(state, action.payload);

    case DELETETODO:
      return filter(state, action.payload);

    default:
      return state;
  }
};

export default Reducer;
