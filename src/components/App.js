import React, { Component } from 'react'
import firebase from 'firebase'

import Navigation from './Navigation'
import Jumbotron from './Jumbotron'
import Feed from './Feed'

import './App.css';

const envs = process.env

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Manny Henri",
            jumbotronTitle: "List of courses",
            feeds: [],
        }
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
            .on('value', snapshot => {
                this.setState({
                    feeds: snapshot.val(),
                })
            });
    }
    render() {
        return (
            <div className="container">
                <Navigation />
                
                <Jumbotron title={this.state.jumbotronTitle} />

                <Feed feeds={this.state.feeds} />

                <div className="footer">
                    <p>&copy; {this.state.name} Inc.</p>
                </div>
            </div>
        )
    }
}

export default App
