import { Avatar } from '@material-ui/core';
import React, {forwardRef} from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ReportIcon from '@material-ui/icons/Report';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Post = forwardRef(({displayName, username, verified, text, image, avater}, ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avater} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{" "}<span className="post__headerSeecial">
                                {verified && <VerifiedUserIcon className="post__badge" />}
                                @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img className="post__image" src={image} alt=""/>
                <div className="post__Footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <ReportIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    );
});

export default Post;
