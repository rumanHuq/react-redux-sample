import React, { Component } from 'react';


export default class PostContainer extends Component {
  render() {
    return (
      <div>
        I am Post Container {this.props.params.id}
      </div>
    );
  }
} 