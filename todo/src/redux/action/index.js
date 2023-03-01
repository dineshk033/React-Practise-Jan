/**
 * action creator -> fucntion return a actions
 * action-> simple JS object contains type and payload
 */

import { ADDTODO, DELETETODO } from "./default_action";

export const addtoTodo = (arg) => ({ type: ADDTODO, payload: arg });

export const deleteFromTodo = (id) => ({ type: DELETETODO, payload: id });
