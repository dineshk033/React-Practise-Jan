import { createSlice } from "@reduxjs/toolkit";
import { concat, filter } from "lodash";
import { ADDTODO, DELETETODO } from "../action/default_action";

const InitialState = [];

// const Reducer = (state = InitialState, action) => {
//   switch (action.type) {
//     case ADDTODO:
//       return concat(state, action.payload);

//     case DELETETODO:
//       return filter(state, action.payload);

//     default:
//       return state;
//   }
// };

const ReduxSlice = createSlice({
  name: "todo",
  initialState: InitialState,
  reducers: {
    addtoTodo(state, action) {
      state.push(action.payload);
    },
    deleteFromTodo(state, action) {
      state = filter(state, action.payload);
    },
  },
});

export const { addtoTodo, deleteFromTodo } = ReduxSlice.actions;
export default ReduxSlice.reducer;
