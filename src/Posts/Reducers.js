import { actionType } from './Action';

export default function (state = { list: [], post: null }, action) {
  switch (action.type) {
  case actionType.FETCH_TODOS:
    return {
      ...state,
      list: action.payload.data
    };

  default: return state;
  }
}