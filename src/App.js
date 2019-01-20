import React, { Component } from 'react';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Provider} from "react-redux"

import Header from "./common/header"
import Home from "./home/index"
import CreateList from "./createList/index"
import Store from "./store"

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: "#e91e63",
    },
    secondary: {
      main: '#00b0ff',
    },
  },
});

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <div>
              <Header></Header>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/lista/:action" component={CreateList}></Route>
              </Switch>
            </div>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
