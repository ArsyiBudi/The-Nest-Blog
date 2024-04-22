import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ({postID, category, title, description, authorID, Thumbnail, createdAt}) => {
  const shortDescription = description.length > 145 ? description.substr(0, 145) + '....' : description;
  const postTitle = title.length > 30 ? title.substr(0, 30) + '....' : title;
  return (
    <article className='PostItem'>
        <div className="post_thumpnail">
            <img src={`${process.env.REACT_APP_ASSETS_URL}uploads/${Thumbnail}`} alt={title} />
        </div>
        <div className="post_content">
            <Link to={`/post/${postID}`}>
                <h3>{postTitle}</h3>
            </Link>
            <p dangerouslySetInnerHTML={{__html : shortDescription}}/>
        </div>
        <div className="post_footer">
           <PostAuthor authorID={authorID} createdAt={createdAt} />
           <Link to={`/posts/categories/${category}`} className='btn categories'>{category}</Link>
        </div>
    </article>
  )
}

export default PostItem