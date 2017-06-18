import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from './Action';
import {Card, CardTitle, CardText} from 'material-ui/Card';
class PostContainer extends Component {
  constructor() {
    super();
    this.state = {
      loading: 'Data is Loading...'
    };
    setTimeout(() => {
      this.setState({ loading: 'Data not available' });
    }, 3000);
  }
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }
  render() {

    if (!this.props.todo) {
      return (
        <div>
          {this.state.loading}
        </div>
      );
    }

    return (
      <Card>
        <CardTitle>{'ID: '+this.props.todo.id}</CardTitle>
        <CardTitle>{'user ID: '+this.props.todo.userId}</CardTitle>
        <CardText>{'Title: '+this.props.todo.title}</CardText>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    todo: state.PostReducers.post
  };
}

export default connect(mapStateToProps, { fetchPost })(PostContainer);