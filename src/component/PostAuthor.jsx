import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../images/avatar1.jpg'

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/sdfsdf`} className='post_author'>
        <div className="post_author-avatar">
            <img src={avatar} alt=      "" />
        </div>
        <div className="post_author-details">
            <h5>By: Ernest Achieyet</h5>
            <small>just Now</small>
        </div>
    </Link>
  )
}

export default PostAuthor