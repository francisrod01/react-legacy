import React, { Component } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Jumbotron from './Jumbotron';
import About from './About';
import Contact from './Contact';
import Feed from './Feed';

import './App.css';

const envs = process.env;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Manny Henri',
      jumbotronTitle: 'List of courses',
      feeds: [],
    };
  }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: envs.REACT_APP_FIREBASE_API_KEY,
      authDomain: envs.REACT_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: envs.REACT_APP_FIREBASE_DATABASE_URL,
      projectId: envs.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: envs.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: envs.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    });

    firebase.database().ref('/')
      .on('value', (snapshot) => {
        this.setState({
          feeds: snapshot.val(),
        });
      });
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Navigation />

          <Jumbotron title={this.state.jumbotronTitle} />

          <Switch>
            <Route
              exact
              path="/"
              render={() => <Feed feeds={this.state.feeds} />}
            />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>

          <div className="footer">
            <p>&copy; {this.state.name} Inc.</p>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
