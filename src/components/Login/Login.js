import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import './Login.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config'

function Login() {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email, photoURL, emailVerified } = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                image: photoURL,
                verified: emailVerified
            }
            setLoggedInUser(signedInUser);
            history.replace("/home");
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    return (
        <div className="login">
            <TwitterIcon className="login__twitterIcon" />
            <h1>See what’s happening <br/> in the world right now</h1>
            <h4>Join Twitter today.</h4>
            <Button onClick={handleGoogleSignIn} variant="outlined">Sign in with Google </Button>
        </div>
    )
}

export default Login;
