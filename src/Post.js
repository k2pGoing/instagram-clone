import React from 'react'
import postImage from './images/react.png'
import './Post.css'

function Post() {
    return (
        <div className="post">
            <h3>Username</h3>
            {/*header -> avatar + username*/}

            <img className="post__image" src={postImage} alt="react post image"/>
            {/* image*/}

            <h4>Username: caption</h4>
            {/*username + caption*/}
        </div>
    )

}

export default Post
