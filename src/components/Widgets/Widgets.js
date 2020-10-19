import React, { useContext } from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import { auth } from 'firebase';
import * as firebase from "firebase/app";


function Widgets() {
    const [loggedInUser, setLoggedInUsert] = useContext(UserContext);
    const history = useHistory()

    const signupRoute = () => {
        history.replace("/")
    }

    const signoutRoute = () => {
        firebase.auth().signOut()
        .then(res => {
            const signOutUser = {
                isSignedIn: false,
                name: '',
                email: ''
            }
            setLoggedInUsert(signOutUser)
          }).catch(function(error) {
            
          });
    }

    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Tweet" type="text" />
            </div>
            {loggedInUser.name ?
                <div className="widgets__signin">
                    <h2>Click to Sign out</h2>
                    <Button onClick={signoutRoute} variant="outlined">Sign out</Button>
                </div>
                :
                <div className="widgets__signin">
                    <h2>New to Twitter?</h2>
                    <small>Sign up now to get your own personalized timeline!</small><br />
                    <Button onClick={signupRoute} variant="outlined">Sign up</Button>
                </div>
            }
            <div className="widgets__widgetsContainer">
                <h3>What's happening</h3>
                <TwitterTweetEmbed tweetId={"858551177860055040"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="cleverqazi"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://facebook.com/cleverprogrammer"}
                    options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
                />
            </div>
        </div>
    )
}

export default Widgets;
