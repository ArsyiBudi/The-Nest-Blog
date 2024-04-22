import React, { useEffect, useState } from 'react'
import PostItem from '../component/PostItem' 
import Loader from '../component/Loader';
import axios from 'axios';

const Post = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`)
        setPost(response?.data)
      } catch (err) {
        console.log(err)
      }

      setIsLoading(false)
    }

    fetchPosts();
  }, [])

  if(isLoading) {
    return <Loader/>
  }
  return (
        <section className="post">
         {post.length > 0 ? <div className="container posts_container">
         {
            post.map(({_id: id, thumbnail, category, title, description, creator, createdAt}) =>
            <PostItem key={id + thumbnail} postID={id} Thumbnail={thumbnail} category={category} title={title} description={description} authorID={creator} createdAt={createdAt}/>)
          }
         </div> : <h2 className='center'>not post founds</h2>}
        </section>
    )
}

export default Post