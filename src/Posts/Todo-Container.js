import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchTodoList} from './Action';

class TodoContainer extends Component {
  componentWillMount(){
    this.props.fetchTodoList();
  }
  render() {

    return (
      <div>
        I am Todo Container
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    todolist: state.PostReducers
  };
}

export default connect(mapStateToProps, {fetchTodoList})(TodoContainer);