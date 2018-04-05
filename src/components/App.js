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
            apiKey: envs.FIREBASE_API_KEY,
            authDomain: envs.FIREBASE_AUTH_DOMAIN,
            databaseURL: envs.FIREBASE_DATABASE_URL,
            projectId: envs.FIREBASE_PROJECT_ID,
            storageBucket: envs.FIREBASE_STORAGE_BUCKET,
            messagingSenderId: envs.FIREBASE_MESSAGING_SENDER_ID,
        })
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
