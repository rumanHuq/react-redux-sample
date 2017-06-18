import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodoList } from './Action';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class TodoContainer extends Component {
  componentWillMount() {
    this.props.fetchTodoList();
  }
  render() {
    if (!this.props.todolist) {
      return (
        <div>
          not available yet...
      </div>
      );
    }
    console.log(this.props.todolist);
    return (
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>User ID</TableHeaderColumn>
            <TableHeaderColumn>Title</TableHeaderColumn>
          </TableRow>
        </TableHeader>

        <TableBody displayRowCheckbox={false}>
          {this._renderToDoList(this.props.todolist.list)}
        </TableBody>
      </Table>
    );
  }
  _renderToDoList(todos) {
    return todos.map(todo => {
      return (
        <TableRow key={todo.id}>
          <TableRowColumn>{todo.id}</TableRowColumn>
          <TableRowColumn>{todo.userId}</TableRowColumn>
          <TableRowColumn>{todo.title}</TableRowColumn>
        </TableRow>
      );
    });
  }
}

function mapStateToProps(state) {
  return {
    todolist: state.PostReducers
  };
}

export default connect(mapStateToProps, { fetchTodoList })(TodoContainer);