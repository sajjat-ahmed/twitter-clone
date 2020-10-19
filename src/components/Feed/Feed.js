import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import TweetBox from '../TweetBox/TweetBox';
import './Feed.css';
import db from '../../firebase';
import FlipMove from "react-flip-move";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            <FlipMove>
                {posts.map(post => (
                    <Post
                        key={post.key}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avater={post.avater}
                        image={post.image}
                    />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed;
