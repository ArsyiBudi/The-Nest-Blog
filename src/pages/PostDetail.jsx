import React, {useContext, useEffect, useState} from 'react'
import PostAuthor from '../component/PostAuthor'
import { Link, useParams } from 'react-router-dom'
import { FilePenLine } from 'lucide-react';
import Loader from '../component/Loader';
import Deletepost from './DeletePost';
import { UserContext } from '../context/userContext';
import axios from 'axios';

const PostDetail = () => {
  const {id} = useParams()
  const [post, setPost] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const {currentUser} = useContext(UserContext)

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`)
        setPost(response.data)
      } catch (error) {
        setError(error)
      }
      setIsLoading(false)
    }
    getPost();
  }, [])

  if(isLoading) {
      return <Loader/>
  }
  return (
        <section className="post-detail">
          {error && <p className='error'>{error}</p>}
          {post && <div className="container post-detail_container">
            <div className="post-detail_header">
                <PostAuthor authorID={post.creator} createdAt={post.createdAt}/>
               {currentUser?.id == post?.creator &&  <div className="post-detail_buttons">
                  <Link to={`/post/${post?._id}/edit`} className='btn sm primary'><FilePenLine size={23} absoluteStrokeWidth /></Link>
                  <Deletepost postId={id}/>
                </div>}
            </div>
            <h1>{post.title}</h1>
            <div className="post-detail_thumpnail">
            <img src={`${process.env.REACT_APP_ASSETS_URL}uploads/${post.thumbnail}`}></img>
            </div>
              <p dangerouslySetInnerHTML={{__html: post.description}}></p>
            <div className="post-detail_content"></div>
            <div className="post-detail_footer"></div>
          </div>}
        </section>
    )
}

export default PostDetail