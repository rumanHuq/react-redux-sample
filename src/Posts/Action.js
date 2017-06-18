import axios from 'axios';

export const actionType = {
  FETCH_TODOS: 'FETCH_TODOS'
};
export function fetchTodoList(){
  const request = axios.get('https://jsonplaceholder.typicode.com/todos');
  return {
    type: actionType.FETCH_TODOS,
    payload: request
  };
}