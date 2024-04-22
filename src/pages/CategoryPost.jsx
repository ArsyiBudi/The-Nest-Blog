import React, { useState, useEffect }from 'react'
import PostItem from '../component/PostItem'
import axios from 'axios'
import Loader from '../component/Loader'
import { useParams } from 'react-router-dom'

const CategoryPost = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const { category } = useParams()

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/categories/${category}`)
        setPost(response?.data)
      } catch (err) {
        console.log(err)
      }

      setIsLoading(false)
    }

    fetchPosts();
  }, [category])

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

export default CategoryPost