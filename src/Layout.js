import React, { Component } from 'react';


export default class Layout extends Component {
  render() {
    return (
      <div>
        <header>
          <h2>Wooah!</h2>
        </header>
        <section>
          {this.props.children}
        </section>
      </div>
    );
  }
} 