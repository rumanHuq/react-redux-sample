import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Layout extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <header>
            <h2>Wooah!!</h2>
          </header>
          <section>
            {this.props.children}
          </section>
        </div>
      </MuiThemeProvider>
    );
  }
} 