import axios from 'axios';

export const actionType = {
  FETCH_TODOS: 'FETCH_TODOS',
  FETCH_POST: 'FETCH_POST'
};
export function fetchTodoList(){
  const request = axios.get('https://jsonplaceholder.typicode.com/todos');
  return {
    type: actionType.FETCH_TODOS,
    payload: request
  };
}

export function fetchPost(id){
  const request = axios.get('https://jsonplaceholder.typicode.com/posts/' + id );
  return {
    type: actionType.FETCH_POST,
    payload: request
  };
}