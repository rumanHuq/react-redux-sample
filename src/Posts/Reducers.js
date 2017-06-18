import { actionType } from './Action';

export default function (state = { toDoList: [], post: null }, action) {
  switch (action.type) {
  case actionType.FETCH_TODOS:
    return action.payload;

  default: return state;
  }
}