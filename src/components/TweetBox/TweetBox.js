import { Avatar, Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import db from '../../firebase';
import './TweetBox.css';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: loggedInUser.name,
            username: loggedInUser.name,
            verified: loggedInUser.verified,
            text: tweetMessage,
            image: tweetImage,
            avater: loggedInUser.image
        })
    }

    return (
        <div className="tweetBox">
            {loggedInUser.name ?
            <form>
                <div className="tweetBox__input">
                    <Avatar src={loggedInUser.image} />
                    <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text"/>
                </div>
                <input onChange={e => setTweetImage(e.target.value)} value={tweetImage} className="tweetBox__imageInput" placeholder="Optional: Enter Images URL" type="text"/>
                <Button onClick={sendTweet} type="submit" className="tweetbox__tweetButton">Tweet</Button>
            </form>
            : ""
            }
        </div>
    )
}

export default TweetBox;
